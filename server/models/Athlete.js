const mongoose = require('mongoose')

const AthleteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Athlete = mongoose.model("Athlete", AthleteSchema)
module.exports = Athlete