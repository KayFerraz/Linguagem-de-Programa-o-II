const fs = require('fs')
console.log("inicio")

fs.writeFileSync("arq.txt","codigo assincrono", function(err){
    setTimeout(function(){
        console.log("arquivo criado")
    },1000)
})
console.log("fim")