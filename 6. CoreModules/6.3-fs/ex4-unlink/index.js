const fs = require ('fs')

fs.unlink('arq.txt', function(err){
    if(err){
        console.log(err)
        return
    }else
        console.log('Arquivo removido')
})
