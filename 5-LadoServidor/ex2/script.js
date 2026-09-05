const fs = require('fs')

fs.readFile('arq.txt','utf-8',(err, data)=>
{
    if(err){
        console.log(err)
        return
    }
    console.log(data)
}
)