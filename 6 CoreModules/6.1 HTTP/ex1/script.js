const http = require('http')
const porta =3000
const servidor = http.createServer((req,resp)=>{
    resp.write('texto http')
    resp.end()
})
servidor.listen(porta,()=>{
    console.log(`Servidor rodando na porta ${porta}`)
})