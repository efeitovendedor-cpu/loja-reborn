@echo off
echo Iniciando Loja Reborn...
start "" http://127.0.0.1:3000/index.html
node -e "const http=require('http'),fs=require('fs'),path=require('path');http.createServer((req,res)=>{let f=path.join('C:/MBR LOJA VIRTUAL/loja-reborn',req.url==='/'?'index.html':req.url);const ext={'.html':'text/html','.css':'text/css','.js':'application/javascript','.jpg':'image/jpeg','.png':'image/png','.ico':'image/x-icon','.gif':'image/gif','.svg':'image/svg+xml','.woff':'font/woff','.woff2':'font/woff2'};fs.readFile(f,(e,d)=>{if(e){res.writeHead(404);res.end();}else{res.writeHead(200,{'Content-Type':ext[path.extname(f)]||'text/plain'});res.end(d);}});}).listen(3000,()=>console.log('Servidor rodando em http://127.0.0.1:3000'));"
