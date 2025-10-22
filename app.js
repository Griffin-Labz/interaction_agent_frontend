let interactions = [];
let cy;
let currentIntervention = null;
let currentView = 'exercise';

const viewFiles = {
  exercise: 'interactions.json',
  alzheimers: 'interactions-alzheimers.json',
  hiit: 'interactions-hiit.json',
};

async function loadInteractions(view = 'exercise') {
  try {
    const response = await fetch(viewFiles[view]);
    if (!response.ok) {
      throw new Error(`Failed to load ${viewFiles[view]}`);
    }
    interactions = await response.json();
    initializeGraph();
    displayInteractions();
    populateElementsList();
    resetIntervention();
  } catch (error) {
    console.error('Error loading interactions:', error);
    alert('Failed to load interaction data. Please try again.');
  }
}

function initializeGraph() {
  // Destroy existing graph if it exists
  if (cy) {
    cy.destroy();
  }

  const elements = buildGraphElements(interactions);

  cy = cytoscape({
    container: document.getElementById('cy'),
    elements: elements,

    style: [
      {
        selector: 'node',
        style: {
          width: 24,
          height: 24,
          'background-color': '#404040',
          'border-width': 1,
          'border-color': '#606060',
          label: 'data(label)',
          'font-size': '18px',
          'font-weight': 'bold',
          color: '#ffffff',
          'text-valign': 'bottom',
          'text-halign': 'center',
          'text-margin-y': 8,
          'text-opacity': 1,
          'text-outline-color': '#1e1e1e',
          'text-outline-width': 2,
        },
      },
      {
        selector: 'node.highlighted-increase',
        style: {
          'background-color': '#43b581',
          'border-color': '#43b581',
          'border-width': 2,
        },
      },
      {
        selector: 'node.highlighted-decrease',
        style: {
          'background-color': '#f04747',
          'border-color': '#f04747',
          'border-width': 2,
        },
      },
      {
        selector: 'edge',
        style: {
          width: 1.5,
          'line-color': 'data(color)',
          'target-arrow-color': 'data(color)',
          'target-arrow-shape': 'triangle',
          'target-arrow-size': 6,
          'curve-style': 'bezier',
          opacity: 0.5,
        },
      },
      {
        selector: 'edge.highlighted',
        style: {
          width: 2.5,
          opacity: 0.9,
        },
      },
    ],

    layout: {
      name: 'cose',
      animate: true,
      animationDuration: 500,
      nodeRepulsion: 200000,
      nodeOverlap: 100,
      idealEdgeLength: 180,
      edgeElasticity: 100,
      nestingFactor: 1.2,
      gravity: 20,
      numIter: 2500,
      initialTemp: 1000,
      coolingFactor: 0.95,
      minTemp: 1.0,
      randomize: false,
    },

    minZoom: 0.1,
    maxZoom: 3,
    wheelSensitivity: 0.2,
  });

  cy.on('tap', 'node', (evt) => highlightNodeConnections(evt.target));

  cy.on('mouseover', 'node', (evt) => {
    const node = evt.target;
    node.neighborhood('node').style({
      'text-outline-width': 3,
      color: '#ffffff',
    });
    node.connectedEdges().style({ opacity: 0.9, width: 2.5 });
  });

  cy.on('mouseout', 'node', (evt) => {
    const node = evt.target;
    node.neighborhood('node').forEach((n) => {
      if (
        !n.hasClass('highlighted-increase') &&
        !n.hasClass('highlighted-decrease')
      ) {
        n.style({
          'text-outline-width': 2,
          color: '#ffffff',
        });
      }
    });
    node.connectedEdges().forEach((edge) => {
      if (!edge.hasClass('highlighted')) {
        edge.style({ opacity: 0.5, width: 1.5 });
      }
    });
  });
}

function buildGraphElements(interactions) {
  const nodes = new Set();
  const edges = [];

  interactions.forEach((interaction, idx) => {
    nodes.add(interaction.independent_variable);
    nodes.add(interaction.dependent_variable);

    const color = interaction.effect === '+' ? '#43b581' : '#f04747';
    edges.push({
      data: {
        id: `edge-${idx}`,
        source: interaction.independent_variable,
        target: interaction.dependent_variable,
        color: color,
        effect: interaction.effect,
        reference: interaction.reference,
      },
    });
  });

  const nodeElements = Array.from(nodes).map((node) => ({
    data: { id: node, label: node },
  }));

  return [...nodeElements, ...edges];
}

function displayInteractions() {
  const container = document.getElementById('interactions-content');
  const grouped = {};
  const referenceMap = new Map();
  let refCounter = 1;

  // First pass: assign numbers to unique DOIs
  interactions.forEach((interaction) => {
    if (!referenceMap.has(interaction.reference)) {
      referenceMap.set(interaction.reference, refCounter++);
    }
  });

  interactions.forEach((interaction) => {
    const key = `${interaction.independent_variable}→${interaction.dependent_variable}`;
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(interaction);
  });

  let html = '';
  Object.entries(grouped).forEach(([key, items]) => {
    const [iv, dv] = key.split('→');
    const effect = items[0].effect === '+' ? 'increases' : 'decreases';
    const effectClass =
      items[0].effect === '+' ? 'effect-increase' : 'effect-decrease';

    html += `<div class="interaction-item">
            <span class="${effectClass}">${iv} ${effect} ${dv} `;

    items.forEach((item, idx) => {
      if (idx > 0) html += ', ';
      const refNum = referenceMap.get(item.reference);
      html += `<a href="https://doi.org/${item.reference}" target="_blank" class="reference-link" title="${item.reference}">[${refNum}]</a>`;
    });

    html += `</span></div>`;
  });

  container.innerHTML = html;
}

function populateElementsList() {
  const elements = new Set();
  interactions.forEach((i) => {
    elements.add(i.independent_variable);
    elements.add(i.dependent_variable);
  });

  const datalist = document.getElementById('elements-list');
  datalist.innerHTML = Array.from(elements)
    .map((el) => `<option value="${el}">`)
    .join('');
}

function applyIntervention() {
  const type = document.getElementById('intervention-type').value;
  const element = document.getElementById('intervention-element').value.trim();

  if (!element || (type === 'increase' && !type)) {
    alert('Please select intervention type and element');
    return;
  }

  currentIntervention = { type, element };

  cy.nodes().removeClass('highlighted-increase highlighted-decrease');
  cy.edges().removeClass('highlighted');

  const affected = calculateAffectedElements(element, type);
  visualizeIntervention(element, type, affected);
  displayAffectedElements(element, type, affected);
}

function calculateAffectedElements(startElement, interventionType) {
  const affected = new Map();
  const queue = [
    { element: startElement, effect: interventionType, path: [startElement] },
  ];
  const visited = new Set();

  while (queue.length > 0) {
    const { element, effect, path } = queue.shift();
    const key = `${element}-${effect}`;

    if (visited.has(key)) continue;
    visited.add(key);

    const outgoingEdges = interactions.filter(
      (i) => i.independent_variable === element
    );

    outgoingEdges.forEach((edge) => {
      const targetEffect = combineEffects(effect, edge.effect);
      const newPath = [...path, edge.dependent_variable];

      if (!affected.has(edge.dependent_variable)) {
        affected.set(edge.dependent_variable, {
          effect: targetEffect,
          paths: [],
        });
      }

      affected.get(edge.dependent_variable).paths.push({
        path: newPath,
        reference: edge.reference,
      });

      if (newPath.length < 5) {
        queue.push({
          element: edge.dependent_variable,
          effect: targetEffect,
          path: newPath,
        });
      }
    });
  }

  return affected;
}

function combineEffects(interventionEffect, edgeEffect) {
  if (interventionEffect === 'increase') {
    return edgeEffect === '+' ? 'increase' : 'decrease';
  } else {
    return edgeEffect === '+' ? 'decrease' : 'increase';
  }
}

function visualizeIntervention(element, type, affected) {
  const node = cy.getElementById(element);
  const className =
    type === 'increase' ? 'highlighted-increase' : 'highlighted-decrease';
  node.addClass(className);

  affected.forEach((info, targetElement) => {
    const targetNode = cy.getElementById(targetElement);
    const affectedClass =
      info.effect === 'increase'
        ? 'highlighted-increase'
        : 'highlighted-decrease';
    targetNode.addClass(affectedClass);

    info.paths.forEach((pathInfo) => {
      for (let i = 0; i < pathInfo.path.length - 1; i++) {
        const edges = cy.edges(
          `[source="${pathInfo.path[i]}"][target="${pathInfo.path[i + 1]}"]`
        );
        edges.addClass('highlighted');
      }
    });
  });
}

function displayAffectedElements(element, type, affected) {
  const panel = document.getElementById('affected-panel');
  const container = document.getElementById('affected-content');

  panel.style.display = 'block';

  let html = `<div class="affected-item"><strong>Intervention:</strong> ${type} ${element}</div>`;

  affected.forEach((info, targetElement) => {
    const effectText = info.effect === 'increase' ? 'increased' : 'decreased';
    const effectClass =
      info.effect === 'increase' ? 'effect-increase' : 'effect-decrease';

    html += `<div class="affected-item">
            <span class="${effectClass}">${targetElement} ${effectText}</span><br>`;

    info.paths.forEach((pathInfo, idx) => {
      const pathStr = pathInfo.path.join(' → ');
      html += `<small>Path ${idx + 1}: ${pathStr}</small>
                    <a href="https://doi.org/${
                      pathInfo.reference
                    }" target="_blank" class="doi-link">[${
        pathInfo.reference
      }]</a><br>`;
    });

    html += `</div>`;
  });

  container.innerHTML = html;
}

function resetIntervention() {
  currentIntervention = null;
  cy.nodes().removeClass('highlighted-increase highlighted-decrease');
  cy.nodes().style({ 'border-width': 1 });
  cy.edges().removeClass('highlighted');
  cy.edges().style({ opacity: 0.5, width: 1.5 });
  document.getElementById('intervention-element').value = '';
  document.getElementById('affected-panel').style.display = 'none';
}

function highlightNodeConnections(node) {
  cy.edges().removeClass('highlighted');
  const connectedEdges = node.connectedEdges();
  connectedEdges.addClass('highlighted');
}

document
  .getElementById('apply-intervention')
  .addEventListener('click', applyIntervention);
document
  .getElementById('reset-intervention')
  .addEventListener('click', resetIntervention);

// Collapse/expand functionality
let isCollapsed = false;
document.getElementById('collapse-toggle').addEventListener('click', () => {
  isCollapsed = !isCollapsed;
  const rightPanel = document.getElementById('right-panel');
  const toggle = document.getElementById('collapse-toggle');

  rightPanel.classList.toggle('collapsed', isCollapsed);
  toggle.textContent = isCollapsed ? '▶' : '◀';

  setTimeout(() => {
    if (cy) {
      cy.resize();
      cy.fit();
    }
  }, 320);
});

// Recenter button functionality
document.getElementById('recenter-button').addEventListener('click', () => {
  if (cy) {
    cy.fit();
    cy.center();
  }
});

// View switcher functionality
function switchView(view) {
  currentView = view;

  // Update button states
  document.querySelectorAll('.view-button').forEach((button) => {
    button.classList.remove('active');
    if (button.dataset.view === view) {
      button.classList.add('active');
    }
  });

  // Load new interactions
  loadInteractions(view);
}

// Add event listeners to view buttons
document.querySelectorAll('.view-button').forEach((button) => {
  button.addEventListener('click', () => {
    switchView(button.dataset.view);
  });
});

// Initialize with default view
loadInteractions(currentView);
