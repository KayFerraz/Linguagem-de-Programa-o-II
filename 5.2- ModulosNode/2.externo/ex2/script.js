const minimist = require('minimist')
const meuModulo = require('./meuModulo')
const args = minimist(process.argv.slice(2))

const n1 = parseInt(args['n1'])
const n2 = parseInt(args['n2'])

meuModulo.soma(n1,n2)
meuModulo.sub(n1,n2)
