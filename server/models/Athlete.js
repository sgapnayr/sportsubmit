const mongoose = require('mongoose')

const AthleteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    dob: {
        type: Date,
        required: false
    },
    loc: {
        type: String,
        required: true
    },
    tm: {
        type: String,
        required: true
    },
    gndr: {
        type: String,
        required: true
    }
})

const Athlete = mongoose.model("Athlete", AthleteSchema)
module.exports = Athlete