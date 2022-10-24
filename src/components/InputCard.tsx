import React, { useState, useEffect } from 'react'
import './Styles.css'
import Axios from 'axios'
import { StringSchemaDefinition } from 'mongoose'
import { Athlete } from './model'

interface Props {
    next: number
    setNext: React.Dispatch<React.SetStateAction<number>>
    gender: number
    setGender: React.Dispatch<React.SetStateAction<number>>
    athleteName: string
    setAthleteName: React.Dispatch<React.SetStateAction<string>>
    dob: string
    setDob: React.Dispatch<React.SetStateAction<string>>
    location: string
    setLocation: React.Dispatch<React.SetStateAction<string>>
    team: string
    setTeam: React.Dispatch<React.SetStateAction<string>>
    genderProfile: string
    setGenderProfile: React.Dispatch<React.SetStateAction<string>>
    sport: string
    setSport: React.Dispatch<React.SetStateAction<string>>
    aboutProfile: string
    setAboutProfile: React.Dispatch<React.SetStateAction<string>>
    interests: string
    setInterests: React.Dispatch<React.SetStateAction<string>>
    athleteList: Athlete[]
    setAthleteList: React.Dispatch<React.SetStateAction<Athlete[]>>
}

const InputCard: React.FC<Props> = ({ next, setNext, gender, setGender, athleteName, setAthleteName, dob, setDob, location, setLocation, team, setTeam, genderProfile, setGenderProfile, sport, setSport, aboutProfile, setAboutProfile, interests, setInterests, athleteList, setAthleteList }) => {
    const addToList = () => {
        setNext(next + 1)
    }

    const maleButton = () => {
        setGender(0)
        setGenderProfile('Male')
    }

    const femaleButton = () => {
        setGender(1)
        setGenderProfile('Female')
    }

    const otherButton = () => {
        setGender(2)
        setGenderProfile('Other')
    }

    const addSport = (sport: string) => {
        setSport(sport)
    }

    const submitButton = () => {
        setNext(0)
        setGender(3)
        setAthleteName('')
        setDob('')
        setNext(next + 1)
        setLocation('')
        setTeam('')
        setGenderProfile('')
        setSport('')
        setAboutProfile('')
        setInterests('')
        Axios.post('http://localhost:3001/insert', { name: athleteName, dob: dob, loc: location, tm: team, gndr: genderProfile, sprt: sport, about: aboutProfile, intrsts: interests })
    }

    useEffect(() => {
        Axios.get('http://localhost:3001/read').then((res) => {
            setAthleteList(res.data)
        })
    }, [])

    return (
        <div className='InputCard'>

            {next === 3 ? <div className='Confirmation'>
                <div className="InputDiv">
                    <h1>Thanks for you submission!</h1>
                </div>
                <button className='Button' onClick={() => setNext(0)}>
                    Done
                </button>
            </div> : null}

            {next === 2 ? <div className='EditPage'>
                <div className="InputDiv">
                    <h1>Your Profile</h1>
                </div>
                <button className='Button' onClick={submitButton}>
                    Confirm
                </button>
            </div> : null}

            {next === 1 ? <div className='PopUp'>
                <div className="InputDiv Sport">
                    <h3>Sport:</h3>
                    <select onChange={(e) => addSport(e.target.value)}>
                        <option value="none">Pick Your Sport</option>
                        <option value="American Football">American Football</option>
                        <option value="Archery">Archery</option>
                        <option value="Automobile Racing">Automobile Racing</option>
                        <option value="Baseball">Baseball</option>
                        <option value="Basketball">Basketball</option>
                        <option value="Badminton">Badminton</option>
                        <option value="Cycling">Cycling</option>
                        <option value="Golf">Golf</option>
                        <option value="Snow Boarding">Snow Boarding</option>
                        <option value="Soccer">Soccer</option>
                        <option value="Swimming">Swimming</option>
                        <option value="Tennis">Tennis</option>
                    </select>
                </div>
                <div className="InputDiv">
                    <h3>About</h3>
                    <input type="text" className='InputBox About' placeholder='How did you get into your sport?' onChange={(e) => setAboutProfile(e.target.value)} value={aboutProfile} />
                </div>
                <div className="InputDiv">
                    <h3>Interests</h3>
                    <input type="text" className='InputBox' placeholder='(e.g. Cornhole, Fishing)' onChange={(e) => setInterests(e.target.value)} value={interests} />
                </div>
                <button className='Button' onClick={addToList}>
                    Next
                </button>

            </div> : null}

            <div className="InputDiv">
                <h3>Enter Athlete Name:</h3>
                <input type="text" className='InputBox' placeholder='Enter Athlete Name...' onChange={(e) => setAthleteName(e.target.value)} value={athleteName} />
            </div>
            <div className="InputDiv">
                <h3>Date of Birth:</h3>
                <input type="date" className='InputBox Date' placeholder='Oct 23, 1999' onChange={(e) => setDob(e.target.value)} value={dob} />
            </div>
            <div className="InputDiv">
                <h3>Location:</h3>
                <input type="text" className='InputBox' placeholder='(e.g. Boston)' onChange={(e) => setLocation(e.target.value)} value={location} />
            </div>
            <div className="InputDiv">
                <h3>Team:</h3>
                <input type="text" className='InputBox' placeholder='(e.g. New York Giants)' onChange={(e) => setTeam(e.target.value)} value={team} />
            </div>
            <div className="InputDiv">
                <h3>Gender</h3>
                <div className="GenderButtonDiv">
                    <button className={gender === 0 ? 'GenderButtonActive' : 'GenderButton'} onClick={maleButton} >Male</button>
                    <button className={gender === 1 ? 'GenderButtonActive' : 'GenderButton'} onClick={femaleButton} >Female</button>
                    <button className={gender === 2 ? 'GenderButtonActive' : 'GenderButton'} onClick={otherButton}>Other</button>
                </div>
            </div>
            <button className='Button' onClick={addToList}>
                Next
            </button>

            {/* {athleteList.map(athlete => {
                return <li key={Date.now()}>{athlete.dob}</li>
            })} */}
        </div>
    )
}

export default InputCard