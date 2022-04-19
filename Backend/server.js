const app = require('./app')

const dotenv = require('dotenv')

dotenv.config({ path: 'Backend/config.env' })

app.listen(process.env.PORT, () => {
    console.log("server running on port" + process.env.PORT)
})