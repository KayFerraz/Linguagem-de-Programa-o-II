const http = require('http')
const fs = require('fs')
const porta = 3000

const servidor = http.createServer((req, resp)=>{
    fs.readFile('mensagem.html',
        function(err, data){
            resp.writeHead(200, {'content-type':'text/html'})
            resp.write(data)
            resp.end()
        }
    )
})
servidor.listen(porta, ()=>{
    console.log(`Servidor rodando na porta ${porta}`)
})