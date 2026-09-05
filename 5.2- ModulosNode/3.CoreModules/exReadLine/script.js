const readLine = require('readLine')
const leitura = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
})
readLine.question('Qual a cor?',(cor)=>{
    console.log(`A mnha cor favorita é ${cor}`)
    readLine.close()
})