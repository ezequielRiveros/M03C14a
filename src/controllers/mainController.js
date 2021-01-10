module.exports={
    index:(req,res)=>{
        res.render('index')
    },
    getAdmin:(req,res)=>{
        res.send('Hola Admin: '+req.query.user)
    }
}