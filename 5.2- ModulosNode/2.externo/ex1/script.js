//  para utilizar pacote npm: npm init -y

// permissão negada, abrir power shell como adm e rodar: 
// Set-ExecutionPolicy RemoteSigned
// opção SIM PARA TODOS 

// npm install minimist - package lock jason

const minimist = require('minimist')
const args = minimist(process.arch.slice(2))
console.log(args)
const nome = args['nome']
console.log(nome)