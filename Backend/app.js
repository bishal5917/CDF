const express=require('express')
const app=express()

app.use(express.json())

const consuls=require('./routes/consulRoutes')

app.use('/api/v1',consuls)

module.exports=app