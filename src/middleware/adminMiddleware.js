const validOptions=['Ada', 'Greta', 'Vim', 'Tim']

module.exports=(req,res,next)=>{
    if(validOptions.find(value => {return value == req.query.user})!= undefined){
        next()
    }else res.render('error', {
        message:"No tienes los privilegios para ingresar",
        path:req.url,
        error:{status:'404',
        stack:"Cannot access to the url due to lack of privileges"  }})

}