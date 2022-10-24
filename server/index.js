const express = require('express')
const mongoose = require('mongoose')
const app = express()

const AthleteModel = require('./models/Athlete')

app.use(express.json())

mongoose.connect('mongodb+srv://ryanpags:123123123@sportsubmit.1cljpzm.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.get('/', async (req, res) => {
    const athlete = new AthleteModel({ name: 'Ryan' })
    try {
        await athlete.save()
    } catch (error) {
        console.log(error)
    }
})

app.listen(3001, () => {
    console.log('Server Running on Port 3001')
})