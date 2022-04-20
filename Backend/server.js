const app = require('./app')
const connectDB=require('./db')

const dotenv = require('dotenv')

dotenv.config({ path: 'Backend/config.env' })

app.listen(5000, () => {
    console.log("server running on port " + 5000)
})
connectDB()