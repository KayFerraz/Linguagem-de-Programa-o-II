const http = require('http')
const fs = require('fs')
const url = require('url')
const porta =3000
const servidor = http.createServer((req, resp)=>{
        const urlInfo = url.parse(req.url, true)
        const nome = urlInfo.query.nome
        if(!nome){
            fs.readFile('index.html', function(err, data){
                resp.statusCode =200
                resp.setHeader('content-type', 'text/html')
                resp.write(data)
                return resp.end()

            })
            
        }else{
            const NovaLinha = nome + '\r\n'
            fs.appendFile("Nomes.txt", NovaLinha, function(err, data){
                resp.writeHead(302,
                    {Location: "/"})
                return resp.end()
            })
        }
})
servidor.listen(porta, ()=>{
    console.log(`Servidor rodando na porta ${porta}`)
})