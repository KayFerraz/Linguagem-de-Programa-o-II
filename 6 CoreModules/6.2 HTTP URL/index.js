const http = require('http')
const url = require('url')
const porta = 300
const servidor = http.createServer((req,resp)=>
{
    const  urlInfo= url.parse(req.url,true)
    const nome = urlInfo.query.nome
    resp.statusCode= 200
    resp.setHeader('content-type','text/html')
    if(!nome){
        resp.end(`<h1>Qual seu nome</h1>
            <form method="GET">
                <input type="text" name="nome"/>
                <input type="submit" value="enviar"/>
            </form>`
        )
    }else
        resp.end(`<h1>Seja bem vindo ${nome} </h1>`)
})
servidor.listen(porta,()=>{
    console.log(`Servidor rodando na porta ${porta}`)
})