const mongoose = require('mongoose')

const AthleteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    dob: {
        type: Date,
        required: false
    }
})

const Athlete = mongoose.model("Athlete", AthleteSchema)
module.exports = Athlete