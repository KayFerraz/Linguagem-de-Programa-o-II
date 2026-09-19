const path = require('path')
console.log(path.resolve('teste.txt'))
const pasta1 = "faculdade"
const pasta2 = "termo"
const nomearq = "LP2.pdf"
const pathFinal = path.join('/',pasta1,pasta2,nomearq)
console.log(pathFinal)