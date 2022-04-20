const app = require('./app')
const connectDB = require('./db')

const dotenv = require('dotenv')

dotenv.config({ path: 'Backend/config.env' })

//uncaught exceptions
process.on("uncaughtException", (err) => {
    console.log("Error : ", err.message)
    console.log("Shutting down the server due to uncaught exceptions")

    server.close(() => {
        process.exit(1)
    })
})

const server = app.listen(5000, () => {
    console.log("server running on port " + 5000)
})
connectDB()

//unhandled exceptions
process.on("unhandledRejection", (err) => {
    console.log("Error : ", err.message)
    console.log("Shutting down the server due to unhandled promise rejection")

    server.close(() => {
        process.exit(1)
    })
})