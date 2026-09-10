const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, 'public');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml' };
http.createServer((req, res) => {
  let file;
  try { file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname)); }
  catch { res.writeHead(400); res.end('Requête invalide'); return; }
  if (file === root) file = path.join(root, 'index.html');
  if (!file.startsWith(root + path.sep)) { res.writeHead(403); res.end('Accès refusé'); return; }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end('Page introuvable'); return; }
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(Number(process.env.PORT) || 4173, '127.0.0.1', () => console.log('Saturnain : http://localhost:' + (process.env.PORT || 4173)));
