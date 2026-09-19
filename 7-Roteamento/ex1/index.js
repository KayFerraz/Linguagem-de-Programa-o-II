const http = require('http')
const fs = require('fs')
const url = require('url')
const { gunzip } = require('zlib')
const porta = 3000

const servidor = http.createServer((req, resp)=>{
    const InfoUrl = url.parse(req.url, true)
    const nomeArq = InfoUrl.pathname.substring(1)
    if(nomeArq.includes('html')){
        if(fs.existsSync(nomeArq)){
            fs.readFile(nomeArq, function(err, data){
                resp.writeHead(200, {'content-type':'text/html'})
                resp.write(data)
                resp.end()
            })
        }else{
            fs.readFile('404.html', function(err, data){
                resp.writeHead(404,{'content-type':'text/html'})
                resp.write(data)
                resp.end()
            })
         }
    }
})
servidor.listen(porta, ()=>{
    console.log(`Servidor rodando na porta ${porta}`)
})