const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

const AthleteModel = require('./models/Athlete')

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://ryanpags:123123123@sportsubmit.1cljpzm.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.post('/insert', async (req, res) => {
    const athleteName = req.body.name
    const dateOfBirth = req.body.dob
    const location = req.body.loc
    const team = req.body.tm
    const gender = req.body.gndr

    const athlete = new AthleteModel({ name: athleteName, dob: dateOfBirth, loc: location, tm: team, gndr: gender })

    try { await athlete.save() }
    catch (error) { console.log(error) }

})

app.listen(3001, () => {
    console.log('Server Running on Port 3001')
})