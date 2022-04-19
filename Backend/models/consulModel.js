const mongoose = require('mongoose')

const consulSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter name "]
    },
    description: {
        type: String,
        required: [true, "Please Enter description"]
    },
    address: {
        type: String,
        required: [true, "Please Enter description"]
    },
    address: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [{
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        rating: {
            type: String,
            required: true
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Consul', consulSchema)