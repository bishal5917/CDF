const express=require("express")
const { getAllConsuls } = require("../controllers/consulController")
const router=express.Router()

router.route('/consuls').get(getAllConsuls)

module.exports=router