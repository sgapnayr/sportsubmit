const mongoose = require('mongoose')

const AthleteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    loc: {
        type: String,
        required: false
    },
    tm: {
        type: String,
        required: false
    },
    gndr: {
        type: String,
        required: false
    },
    sprt: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: false
    },
    intrsts: {
        type: String,
        required: false
    }
})

const Athlete = mongoose.model("Athlete", AthleteSchema)
module.exports = Athlete