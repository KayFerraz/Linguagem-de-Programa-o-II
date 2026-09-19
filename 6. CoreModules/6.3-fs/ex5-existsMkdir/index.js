const path = require('path')
const fs = require('fs')

if(!fs.existsSync('./dir1')){
    console.log("Diretório não exista")
    fs.mkdirSync('dir1')
}else
    console.log("O diretório existe")
    