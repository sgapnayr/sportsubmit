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
    const sport = req.body.sprt
    const aboutAthlete = req.body.about
    const interests = req.body.intrsts

    const athlete = new AthleteModel({ name: athleteName, dob: dateOfBirth, loc: location, tm: team, gndr: gender, sprt: sport, about: aboutAthlete, intrsts: interests })

    try { await athlete.save() }
    catch (error) { console.log(error) }

})

app.get('/read', async (req, res) => {
    AthleteModel.find((error, result) => {
        if (error) { res.send(error) }
        res.send(result)
        console.log(result)
    })
})

app.put('/update', async (req, res) => {
    const newAthleteName = req.body.newAthleteName
    const id = req.body.id

    try {
        await AthleteModel.findById(id, (updatedAthlete) => {
            updatedAthlete.athleteName = newAthleteName
            updatedAthlete.save()
            res.send("update")
        })
    } catch (error) {
        console.log(error)
    }

})

app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id

    await AthleteModel.findByIdAndRemove(id).exec()
    res.send('deleted')
})

app.listen(3001, () => {
    console.log('Server Running on Port 3001')
})