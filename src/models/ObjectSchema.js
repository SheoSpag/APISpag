const mongoose = require('mongoose')

const objectSchema = mongoose.Schema({

    shape: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    createdAt: {
        type: String,
        required: true
    },

    updatedAt: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Object', objectSchema)