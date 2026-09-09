const url = require('url')
const endereco = 'https://www.unoeste.br/Site/AVA/Disciplina/Disciplina.aspx?discId=222314'
const parseURL = new url.URL(endereco)
console.log(parseURL)
console.log(parseURL.host)
console.log(parseURL.pathname)
console.log(parseURL.search)
console.log(parseURL.searchParams)
console.log(parseURL.searchParams.get('discId'))