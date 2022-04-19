const app = require('./app')
const connectDB=require('./db')

const dotenv = require('dotenv')

dotenv.config({ path: 'Backend/config.env' })

app.listen(process.env.PORT, () => {
    console.log("server running on port" + process.env.PORT)
})
connectDB()