const mongoose = require('mongoose')

MONGO_URL = "mongodb://localhost:27017/cdf"

const connectDB = () => {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Mongodb connected sucessfully")
    }).catch((error) => {
        console.log(error)
    })
}

module.exports = connectDB