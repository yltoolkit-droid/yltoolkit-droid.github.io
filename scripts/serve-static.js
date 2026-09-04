const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const port = Number(process.argv[2]) || 8765;
const types = {".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",".json":"application/json; charset=utf-8",".svg":"image/svg+xml"};

http.createServer((req,res)=>{
  const pathname=decodeURIComponent(new URL(req.url,"http://localhost").pathname);
  const requested=path.resolve(root,`.${pathname}`);
  if(!requested.startsWith(root)){res.writeHead(403).end("Forbidden");return;}
  let file=requested;
  if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,"index.html");
  if(!fs.existsSync(file)){res.writeHead(404).end("Not found");return;}
  res.writeHead(200,{"Content-Type":types[path.extname(file)]||"application/octet-stream"});
  fs.createReadStream(file).pipe(res);
}).listen(port,"127.0.0.1",()=>console.log(`YL Toolkit preview: http://127.0.0.1:${port}/`));
