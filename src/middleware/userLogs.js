const fs=require('fs')
const path=require('path')
const message= 'El usuario ingresó a la ruta:'
const filePath=path.resolve('src','logs','userLogs.txt')

module.exports=(req,res,next)=>{
    fs.appendFileSync(filePath, message+ req.url+'\n' ) 
    next();
}