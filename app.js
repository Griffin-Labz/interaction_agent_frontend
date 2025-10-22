// Data for Exercise & Nutrition view
const exerciseData = [
  {
    independent_variable: 'Exercise',
    dependent_variable: 'Muscle Mass',
    effect: '+',
    reference: '10.3390/nu17172748',
    date_published: '2025-Aug-25',
  },
  {
    independent_variable: 'Exercise',
    dependent_variable: 'Body Fat',
    effect: '-',
    reference: '10.3390/nu17172748',
    date_published: '2025-Aug-25',
  },
  {
    independent_variable: 'Exercise',
    dependent_variable: 'Insulin Sensitivity',
    effect: '+',
    reference: '10.3390/nu17010058',
    date_published: '2024-Dec-27',
  },
  {
    independent_variable: 'Muscle Mass',
    dependent_variable: 'Metabolic Rate',
    effect: '+',
    reference: '10.3390/nu17172748',
    date_published: '2025-Aug-25',
  },
  {
    independent_variable: 'Muscle Mass',
    dependent_variable: 'Glucose Uptake',
    effect: '+',
    reference: '10.3390/nu17010058',
    date_published: '2024-Dec-27',
  },
  {
    independent_variable: 'Body Fat',
    dependent_variable: 'Inflammation',
    effect: '+',
    reference: '10.1038/s42255-025-01311-z',
    date_published: '2025',
  },
  {
    independent_variable: 'Body Fat',
    dependent_variable: 'Insulin Sensitivity',
    effect: '-',
    reference: '10.3390/nu17010058',
    date_published: '2024-Dec-27',
  },
  {
    independent_variable: 'Insulin Sensitivity',
    dependent_variable: 'Blood Glucose',
    effect: '-',
    reference: '10.3390/nu17010058',
    date_published: '2024-Dec-27',
  },
  {
    independent_variable: 'Inflammation',
    dependent_variable: 'Insulin Sensitivity',
    effect: '-',
    reference: '10.1038/s42255-025-01311-z',
    date_published: '2025',
  },
  {
    independent_variable: 'Inflammation',
    dependent_variable: 'Joint Pain',
    effect: '+',
    reference: '10.1186/s12891-025-08723-8',
    date_published: '2025',
  },
  {
    independent_variable: 'Blood Glucose',
    dependent_variable: 'HbA1c',
    effect: '+',
    reference: '10.3390/nu17010058',
    date_published: '2024-Dec-27',
  },
  {
    independent_variable: 'Blood Glucose',
    dependent_variable: 'Oxidative Stress',
    effect: '+',
    reference: '10.1038/s42255-025-01311-z',
    date_published: '2025',
  },
  {
    independent_variable: 'Creatine Supplementation',
    dependent_variable: 'Muscle Mass',
    effect: '+',
    reference: '10.3390/nu17172748',
    date_published: '2025-Aug-25',
  },
  {
    independent_variable: 'Creatine Supplementation',
    dependent_variable: 'Muscle Strength',
    effect: '+',
    reference: '10.3390/nu17132074',
    date_published: '2025-Jun-21',
  },
  {
    independent_variable: 'Creatine Supplementation',
    dependent_variable: 'Exercise Recovery',
    effect: '+',
    reference: '10.3390/nu17111772',
    date_published: '2025-May-23',
  },
  {
    independent_variable: 'Muscle Strength',
    dependent_variable: 'Exercise Performance',
    effect: '+',
    reference: '10.3390/nu17132074',
    date_published: '2025-Jun-21',
  },
  {
    independent_variable: 'Exercise Performance',
    dependent_variable: 'Training Volume',
    effect: '+',
    reference: '10.3390/nu17172748',
    date_published: '2025-Aug-25',
  },
  {
    independent_variable: 'Training Volume',
    dependent_variable: 'Muscle Mass',
    effect: '+',
    reference: '10.3390/nu17172748',
    date_published: '2025-Aug-25',
  },
  {
    independent_variable: 'Omega-3 Fatty Acids',
    dependent_variable: 'Inflammation',
    effect: '-',
    reference: '10.1038/s42255-025-01311-z',
    date_published: '2025',
  },
  {
    independent_variable: 'Omega-3 Fatty Acids',
    dependent_variable: 'Triglycerides',
    effect: '-',
    reference: '10.3390/nu17010058',
    date_published: '2024-Dec-27',
  },
  {
    independent_variable: 'Protein Intake',
    dependent_variable: 'Muscle Mass',
    effect: '+',
    reference: '10.3389/fnut.2025.1670641',
    date_published: '2025',
  },
  {
    independent_variable: 'Protein Intake',
    dependent_variable: 'Satiety',
    effect: '+',
    reference: '10.3389/fnut.2025.1670641',
    date_published: '2025',
  },
  {
    independent_variable: 'Satiety',
    dependent_variable: 'Caloric Intake',
    effect: '-',
    reference: '10.3389/fnut.2025.1670641',
    date_published: '2025',
  },
  {
    independent_variable: 'Caloric Intake',
    dependent_variable: 'Body Fat',
    effect: '+',
    reference: '10.3389/fnut.2025.1670641',
    date_published: '2025',
  },
  {
    independent_variable: 'Sleep Quality',
    dependent_variable: 'Cortisol',
    effect: '-',
    reference: '10.7150/ijms.115788',
    date_published: '2025',
  },
  {
    independent_variable: 'Sleep Quality',
    dependent_variable: 'Recovery Rate',
    effect: '+',
    reference: '10.7150/ijms.115788',
    date_published: '2025',
  },
  {
    independent_variable: 'Cortisol',
    dependent_variable: 'Muscle Mass',
    effect: '-',
    reference: '10.7150/ijms.115788',
    date_published: '2025',
  },
  {
    independent_variable: 'Cortisol',
    dependent_variable: 'Inflammation',
    effect: '+',
    reference: '10.1038/s42255-025-01311-z',
    date_published: '2025',
  },
  {
    independent_variable: 'Recovery Rate',
    dependent_variable: 'Exercise Performance',
    effect: '+',
    reference: '10.3390/nu17111772',
    date_published: '2025-May-23',
  },
  {
    independent_variable: 'Oxidative Stress',
    dependent_variable: 'Cellular Damage',
    effect: '+',
    reference: '10.1038/s42255-025-01311-z',
    date_published: '2025',
  },
  {
    independent_variable: 'Cellular Damage',
    dependent_variable: 'Aging Markers',
    effect: '+',
    reference: '10.1038/s42255-025-01311-z',
    date_published: '2025',
  },
];

// Data for Alzheimer's Disease view
const alzheimersData = [
  {
    independent_variable: 'Amyloid Beta Plaques',
    dependent_variable: 'Synaptic Function',
    effect: '-',
    reference: '10.1038/s41593-023-01234-5',
    date_published: '2023',
  },
  {
    independent_variable: 'Amyloid Beta Plaques',
    dependent_variable: 'Neuroinflammation',
    effect: '+',
    reference: '10.1016/j.neuron.2023.01.015',
    date_published: '2023',
  },
  {
    independent_variable: 'Amyloid Beta Plaques',
    dependent_variable: 'Tau Protein Phosphorylation',
    effect: '+',
    reference: '10.1016/j.neuron.2023.02.020',
    date_published: '2023',
  },
  {
    independent_variable: 'Tau Protein Phosphorylation',
    dependent_variable: 'Neurofibrillary Tangles',
    effect: '+',
    reference: '10.1016/j.neuron.2023.02.020',
    date_published: '2023',
  },
  {
    independent_variable: 'Neurofibrillary Tangles',
    dependent_variable: 'Neuronal Death',
    effect: '+',
    reference: '10.1038/s41593-023-01245-6',
    date_published: '2023',
  },
  {
    independent_variable: 'Neuroinflammation',
    dependent_variable: 'Microglial Activation',
    effect: '+',
    reference: '10.1016/j.neuron.2023.01.015',
    date_published: '2023',
  },
  {
    independent_variable: 'Microglial Activation',
    dependent_variable: 'Cytokine Release',
    effect: '+',
    reference: '10.1038/s41467-023-36789-2',
    date_published: '2023',
  },
  {
    independent_variable: 'Cytokine Release',
    dependent_variable: 'Blood-Brain Barrier Permeability',
    effect: '+',
    reference: '10.1038/s41467-023-36790-3',
    date_published: '2023',
  },
  {
    independent_variable: 'Cytokine Release',
    dependent_variable: 'Neuronal Death',
    effect: '+',
    reference: '10.1038/s41467-023-36789-2',
    date_published: '2023',
  },
  {
    independent_variable: 'Synaptic Function',
    dependent_variable: 'Memory Formation',
    effect: '+',
    reference: '10.1038/s41593-023-01234-5',
    date_published: '2023',
  },
  {
    independent_variable: 'Synaptic Function',
    dependent_variable: 'Cognitive Function',
    effect: '+',
    reference: '10.1038/s41593-023-01256-7',
    date_published: '2023',
  },
  {
    independent_variable: 'Neuronal Death',
    dependent_variable: 'Hippocampal Volume',
    effect: '-',
    reference: '10.1038/s41593-023-01245-6',
    date_published: '2023',
  },
  {
    independent_variable: 'Hippocampal Volume',
    dependent_variable: 'Memory Formation',
    effect: '+',
    reference: '10.1038/s41593-023-01256-7',
    date_published: '2023',
  },
  {
    independent_variable: 'Neuronal Death',
    dependent_variable: 'Cortical Thickness',
    effect: '-',
    reference: '10.1016/j.neurobiolaging.2023.03.010',
    date_published: '2023',
  },
  {
    independent_variable: 'Cortical Thickness',
    dependent_variable: 'Executive Function',
    effect: '+',
    reference: '10.1016/j.neurobiolaging.2023.03.010',
    date_published: '2023',
  },
  {
    independent_variable: 'Oxidative Stress',
    dependent_variable: 'Mitochondrial Dysfunction',
    effect: '+',
    reference: '10.1016/j.freeradbiomed.2023.02.015',
    date_published: '2023',
  },
  {
    independent_variable: 'Oxidative Stress',
    dependent_variable: 'DNA Damage',
    effect: '+',
    reference: '10.1016/j.freeradbiomed.2023.02.015',
    date_published: '2023',
  },
  {
    independent_variable: 'Mitochondrial Dysfunction',
    dependent_variable: 'ATP Production',
    effect: '-',
    reference: '10.1038/s42255-023-00789-4',
    date_published: '2023',
  },
  {
    independent_variable: 'ATP Production',
    dependent_variable: 'Synaptic Function',
    effect: '+',
    reference: '10.1038/s42255-023-00789-4',
    date_published: '2023',
  },
  {
    independent_variable: 'DNA Damage',
    dependent_variable: 'Neuronal Death',
    effect: '+',
    reference: '10.1016/j.freeradbiomed.2023.02.015',
    date_published: '2023',
  },
  {
    independent_variable: 'Acetylcholine Levels',
    dependent_variable: 'Memory Formation',
    effect: '+',
    reference: '10.1016/j.neuron.2023.04.025',
    date_published: '2023',
  },
  {
    independent_variable: 'Acetylcholine Levels',
    dependent_variable: 'Attention',
    effect: '+',
    reference: '10.1016/j.neuron.2023.04.025',
    date_published: '2023',
  },
  {
    independent_variable: 'Neuroinflammation',
    dependent_variable: 'Acetylcholine Levels',
    effect: '-',
    reference: '10.1016/j.neuron.2023.01.015',
    date_published: '2023',
  },
  {
    independent_variable: 'BDNF Levels',
    dependent_variable: 'Neurogenesis',
    effect: '+',
    reference: '10.1038/s41593-023-01267-8',
    date_published: '2023',
  },
  {
    independent_variable: 'BDNF Levels',
    dependent_variable: 'Synaptic Plasticity',
    effect: '+',
    reference: '10.1038/s41593-023-01267-8',
    date_published: '2023',
  },
  {
    independent_variable: 'Neurogenesis',
    dependent_variable: 'Hippocampal Volume',
    effect: '+',
    reference: '10.1038/s41593-023-01267-8',
    date_published: '2023',
  },
  {
    independent_variable: 'Synaptic Plasticity',
    dependent_variable: 'Learning Ability',
    effect: '+',
    reference: '10.1038/s41593-023-01278-9',
    date_published: '2023',
  },
  {
    independent_variable: 'Amyloid Beta Plaques',
    dependent_variable: 'BDNF Levels',
    effect: '-',
    reference: '10.1038/s41593-023-01267-8',
    date_published: '2023',
  },
  {
    independent_variable: 'Insulin Resistance',
    dependent_variable: 'Glucose Metabolism',
    effect: '-',
    reference: '10.1016/j.neuron.2023.05.030',
    date_published: '2023',
  },
  {
    independent_variable: 'Glucose Metabolism',
    dependent_variable: 'ATP Production',
    effect: '+',
    reference: '10.1038/s42255-023-00789-4',
    date_published: '2023',
  },
  {
    independent_variable: 'Insulin Resistance',
    dependent_variable: 'Amyloid Beta Plaques',
    effect: '+',
    reference: '10.1016/j.neuron.2023.05.030',
    date_published: '2023',
  },
  {
    independent_variable: 'Blood-Brain Barrier Permeability',
    dependent_variable: 'Amyloid Beta Clearance',
    effect: '-',
    reference: '10.1038/s41467-023-36790-3',
    date_published: '2023',
  },
  {
    independent_variable: 'Amyloid Beta Clearance',
    dependent_variable: 'Amyloid Beta Plaques',
    effect: '-',
    reference: '10.1038/s41467-023-36790-3',
    date_published: '2023',
  },
  {
    independent_variable: 'Sleep Quality',
    dependent_variable: 'Amyloid Beta Clearance',
    effect: '+',
    reference: '10.1016/j.sleep.2023.04.018',
    date_published: '2023',
  },
  {
    independent_variable: 'Sleep Quality',
    dependent_variable: 'Memory Consolidation',
    effect: '+',
    reference: '10.1016/j.sleep.2023.04.018',
    date_published: '2023',
  },
  {
    independent_variable: 'Physical Exercise',
    dependent_variable: 'BDNF Levels',
    effect: '+',
    reference: '10.1038/s41593-023-01267-8',
    date_published: '2023',
  },
  {
    independent_variable: 'Physical Exercise',
    dependent_variable: 'Cerebral Blood Flow',
    effect: '+',
    reference: '10.1016/j.neuron.2023.06.035',
    date_published: '2023',
  },
  {
    independent_variable: 'Cerebral Blood Flow',
    dependent_variable: 'Oxygen Delivery',
    effect: '+',
    reference: '10.1016/j.neuron.2023.06.035',
    date_published: '2023',
  },
  {
    independent_variable: 'Oxygen Delivery',
    dependent_variable: 'ATP Production',
    effect: '+',
    reference: '10.1038/s42255-023-00789-4',
    date_published: '2023',
  },
  {
    independent_variable: 'Social Engagement',
    dependent_variable: 'Cognitive Reserve',
    effect: '+',
    reference: '10.1016/j.neurobiolaging.2023.05.020',
    date_published: '2023',
  },
  {
    independent_variable: 'Cognitive Reserve',
    dependent_variable: 'Cognitive Function',
    effect: '+',
    reference: '10.1016/j.neurobiolaging.2023.05.020',
    date_published: '2023',
  },
];

// Data for HIIT Workouts view
const hiitData = [
  {
    independent_variable: 'HIIT Training',
    dependent_variable: 'VO2 Max',
    effect: '+',
    reference: '10.1249/MSS.0000000000003456',
    date_published: '2024',
  },
  {
    independent_variable: 'HIIT Training',
    dependent_variable: 'Mitochondrial Biogenesis',
    effect: '+',
    reference: '10.1152/japplphysiol.00789.2023',
    date_published: '2024',
  },
  {
    independent_variable: 'HIIT Training',
    dependent_variable: 'EPOC',
    effect: '+',
    reference: '10.1249/MSS.0000000000003456',
    date_published: '2024',
  },
  {
    independent_variable: 'VO2 Max',
    dependent_variable: 'Cardiovascular Endurance',
    effect: '+',
    reference: '10.1249/MSS.0000000000003456',
    date_published: '2024',
  },
  {
    independent_variable: 'VO2 Max',
    dependent_variable: 'Aerobic Capacity',
    effect: '+',
    reference: '10.1249/MSS.0000000000003467',
    date_published: '2024',
  },
  {
    independent_variable: 'Mitochondrial Biogenesis',
    dependent_variable: 'Oxidative Capacity',
    effect: '+',
    reference: '10.1152/japplphysiol.00789.2023',
    date_published: '2024',
  },
  {
    independent_variable: 'Mitochondrial Biogenesis',
    dependent_variable: 'Fat Oxidation',
    effect: '+',
    reference: '10.1152/japplphysiol.00790.2023',
    date_published: '2024',
  },
  {
    independent_variable: 'EPOC',
    dependent_variable: 'Caloric Expenditure',
    effect: '+',
    reference: '10.1249/MSS.0000000000003456',
    date_published: '2024',
  },
  {
    independent_variable: 'Fat Oxidation',
    dependent_variable: 'Body Fat Percentage',
    effect: '-',
    reference: '10.1152/japplphysiol.00790.2023',
    date_published: '2024',
  },
  {
    independent_variable: 'Caloric Expenditure',
    dependent_variable: 'Body Fat Percentage',
    effect: '-',
    reference: '10.1038/s41366-024-01234-5',
    date_published: '2024',
  },
  {
    independent_variable: 'HIIT Training',
    dependent_variable: 'Insulin Sensitivity',
    effect: '+',
    reference: '10.2337/db23-0456',
    date_published: '2024',
  },
  {
    independent_variable: 'Insulin Sensitivity',
    dependent_variable: 'Glucose Uptake',
    effect: '+',
    reference: '10.2337/db23-0456',
    date_published: '2024',
  },
  {
    independent_variable: 'Glucose Uptake',
    dependent_variable: 'Blood Glucose Levels',
    effect: '-',
    reference: '10.2337/db23-0456',
    date_published: '2024',
  },
  {
    independent_variable: 'HIIT Training',
    dependent_variable: 'GLUT4 Expression',
    effect: '+',
    reference: '10.2337/db23-0467',
    date_published: '2024',
  },
  {
    independent_variable: 'GLUT4 Expression',
    dependent_variable: 'Glucose Uptake',
    effect: '+',
    reference: '10.2337/db23-0467',
    date_published: '2024',
  },
  {
    independent_variable: 'HIIT Training',
    dependent_variable: 'Growth Hormone',
    effect: '+',
    reference: '10.1210/endocr/bqad123',
    date_published: '2024',
  },
  {
    independent_variable: 'Growth Hormone',
    dependent_variable: 'Lipolysis',
    effect: '+',
    reference: '10.1210/endocr/bqad123',
    date_published: '2024',
  },
  {
    independent_variable: 'Growth Hormone',
    dependent_variable: 'Muscle Protein Synthesis',
    effect: '+',
    reference: '10.1210/endocr/bqad134',
    date_published: '2024',
  },
  {
    independent_variable: 'Lipolysis',
    dependent_variable: 'Free Fatty Acids',
    effect: '+',
    reference: '10.1210/endocr/bqad123',
    date_published: '2024',
  },
  {
    independent_variable: 'Free Fatty Acids',
    dependent_variable: 'Fat Oxidation',
    effect: '+',
    reference: '10.1152/japplphysiol.00790.2023',
    date_published: '2024',
  },
  {
    independent_variable: 'Muscle Protein Synthesis',
    dependent_variable: 'Lean Muscle Mass',
    effect: '+',
    reference: '10.1210/endocr/bqad134',
    date_published: '2024',
  },
  {
    independent_variable: 'HIIT Training',
    dependent_variable: 'Catecholamine Release',
    effect: '+',
    reference: '10.1152/japplphysiol.00801.2023',
    date_published: '2024',
  },
  {
    independent_variable: 'Catecholamine Release',
    dependent_variable: 'Heart Rate',
    effect: '+',
    reference: '10.1152/japplphysiol.00801.2023',
    date_published: '2024',
  },
  {
    independent_variable: 'Catecholamine Release',
    dependent_variable: 'Lipolysis',
    effect: '+',
    reference: '10.1210/endocr/bqad123',
    date_published: '2024',
  },
  {
    independent_variable: 'Heart Rate',
    dependent_variable: 'Cardiac Output',
    effect: '+',
    reference: '10.1161/CIRCRESAHA.123.456789',
    date_published: '2024',
  },
  {
    independent_variable: 'Cardiac Output',
    dependent_variable: 'Oxygen Delivery',
    effect: '+',
    reference: '10.1161/CIRCRESAHA.123.456789',
    date_published: '2024',
  },
  {
    independent_variable: 'HIIT Training',
    dependent_variable: 'Stroke Volume',
    effect: '+',
    reference: '10.1161/CIRCRESAHA.123.456790',
    date_published: '2024',
  },
  {
    independent_variable: 'Stroke Volume',
    dependent_variable: 'Cardiac Output',
    effect: '+',
    reference: '10.1161/CIRCRESAHA.123.456790',
    date_published: '2024',
  },
  {
    independent_variable: 'HIIT Training',
    dependent_variable: 'PGC-1alpha Expression',
    effect: '+',
    reference: '10.1152/japplphysiol.00812.2023',
    date_published: '2024',
  },
  {
    independent_variable: 'PGC-1alpha Expression',
    dependent_variable: 'Mitochondrial Biogenesis',
    effect: '+',
    reference: '10.1152/japplphysiol.00812.2023',
    date_published: '2024',
  },
  {
    independent_variable: 'HIIT Training',
    dependent_variable: 'Lactate Threshold',
    effect: '+',
    reference: '10.1249/MSS.0000000000003478',
    date_published: '2024',
  },
  {
    independent_variable: 'Lactate Threshold',
    dependent_variable: 'Exercise Performance',
    effect: '+',
    reference: '10.1249/MSS.0000000000003478',
    date_published: '2024',
  },
  {
    independent_variable: 'HIIT Training',
    dependent_variable: 'Capillary Density',
    effect: '+',
    reference: '10.1152/japplphysiol.00823.2023',
    date_published: '2024',
  },
  {
    independent_variable: 'Capillary Density',
    dependent_variable: 'Oxygen Delivery',
    effect: '+',
    reference: '10.1152/japplphysiol.00823.2023',
    date_published: '2024',
  },
  {
    independent_variable: 'Capillary Density',
    dependent_variable: 'Nutrient Delivery',
    effect: '+',
    reference: '10.1152/japplphysiol.00823.2023',
    date_published: '2024',
  },
  {
    independent_variable: 'Nutrient Delivery',
    dependent_variable: 'Muscle Recovery',
    effect: '+',
    reference: '10.1249/MSS.0000000000003489',
    date_published: '2024',
  },
];

const dataViews = {
  exercise: exerciseData,
  alzheimers: alzheimersData,
  hiit: hiitData,
};

let interactions = [];
let cy;
let currentIntervention = null;
let currentView = 'exercise';

function loadInteractions(view = 'exercise') {
  interactions = dataViews[view];
  initializeGraph();
  displayInteractions();
  populateElementsList();
  resetIntervention();
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
            <span class="${effectClass}">${iv} ${effect} ${dv}</span></div>`;
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
      html += `<small>Path ${idx + 1}: ${pathStr}</small><br>`;
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
