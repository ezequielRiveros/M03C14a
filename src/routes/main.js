const express=require('express')
const path=require('path')
const mainController=require(path.resolve(__dirname,'..','controllers','mainController'))
const adminMiddleware=require(path.resolve(__dirname,'..','middleware','adminMiddleware'))

const router =express.Router();


router.use('/admin',adminMiddleware,mainController.getAdmin )
router.use('/',mainController.index)

module.exports=router