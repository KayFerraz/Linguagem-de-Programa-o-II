const http = require('http')
const porta =3000
const servidor = http.createServer((req,resp)=>{
    resp.statusCode = 200
    resp.setHeader('Content-Type','text/html')
    resp.end('<h1>testando servidor com HTML<\h1>')
})
servidor.listen(porta,()=>{
    console.log(`Servidor rodando na porta ${porta}`)
})