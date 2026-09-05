const url = require ('url')
const endereco = 'https://www.meusite.com/catalogo?produtos=bolo'
const parseURL = new url.URL(endereco)

console.log(parseURL.host)
console.log(parseURL.pathname)
console.log(parseURL.search)
console.log(parseURL.searchParams)
console.log(parseURL.searchParams.get(produtos))