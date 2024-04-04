let mongoose = require("mongoose")

let schema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    subject: {
        type: String
    }
})

module.exports = mongoose.model('users', schema)

