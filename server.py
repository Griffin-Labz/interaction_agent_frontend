"""
DEPRECATED: This server is no longer required for the frontend.
The frontend now uses interactions.json directly and can be served as a static site.
This file is kept for reference and local development convenience only.
"""
from http.server import HTTPServer, SimpleHTTPRequestHandler
import json
import csv
from pathlib import Path
from urllib.parse import urlparse

class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed = urlparse(self.path)
        
        if parsed.path == '/api/interactions':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            
            csv_path = Path(__file__).parent.parent / 'interactions.csv'
            interactions = []
            
            with open(csv_path, 'r', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                interactions = list(reader)
            
            self.wfile.write(json.dumps(interactions).encode())
        else:
            super().do_GET()

def run(port=8000):
    server = HTTPServer(('localhost', port), Handler)
    print(f'Server running at http://localhost:{port}/')
    print('Press Ctrl+C to stop')
    server.serve_forever()

if __name__ == '__main__':
    run()

