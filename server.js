const http = require('http');
const fs = require('fs');
const path = require('path');
const dir = 'C:/MBR LOJA VIRTUAL/loja-reborn';
const mime = {
  '.html': 'text/html;charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml'
};
http.createServer((req, res) => {
  let f = path.join(dir, req.url === '/' ? 'index.html' : decodeURIComponent(req.url));
  fs.readFile(f, (e, d) => {
    if (e) { res.writeHead(404); res.end('Not found'); }
    else { res.writeHead(200, { 'Content-Type': mime[path.extname(f)] || 'application/octet-stream' }); res.end(d); }
  });
}).listen(process.env.PORT || 3000, () => console.log('Servidor rodando na porta ' + (process.env.PORT || 3000)));
