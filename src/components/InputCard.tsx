import React, { useState } from 'react'
import './Styles.css'
import Axios from 'axios'

interface Props {
    next: number
    gender: number
    setNext: React.Dispatch<React.SetStateAction<number>>
    setGender: React.Dispatch<React.SetStateAction<number>>
    athleteName: string
    setAthleteName: React.Dispatch<React.SetStateAction<string>>
    dob: string
    setDob: React.Dispatch<React.SetStateAction<string>>
}

const InputCard: React.FC<Props> = ({ setNext, next, gender, setGender, athleteName, setAthleteName, dob, setDob }) => {
    const addToList = () => {
        Axios.post('http://localhost:3001/insert', { name: athleteName, dob: dob })
        setNext(next + 1)
        setAthleteName('')
        setDob('')
    }

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
                    <h1>Edit Page</h1>
                </div>
                <button className='Button' onClick={addToList}>
                    Done
                </button>
            </div> : null}

            {next === 1 ? <div className='PopUp'>
                <div className="InputDiv Sport">
                    <h3>Sport:</h3>
                    <select name="" id="">
                        <option value="">Pick Your Sport</option>
                        <option value="">Baseball</option>
                    </select>
                </div>
                <div className="InputDiv">
                    <h3>About</h3>
                    <input type="text" className='InputBox About' placeholder='I really like to...' />
                </div>
                <div className="InputDiv">
                    <h3>Interests</h3>
                    <input type="text" className='InputBox' placeholder='(e.g. Cornhole, Fishing)' />
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
                <input type="text" className='InputBox' placeholder='(e.g. Boston)' />
            </div>
            <div className="InputDiv">
                <h3>Team:</h3>
                <input type="text" className='InputBox' placeholder='(e.g. New York Giants)' />
            </div>
            <div className="InputDiv">
                <h3>Gender</h3>
                <div className="GenderButtonDiv">
                    <button className={gender === 0 ? 'GenderButtonActive' : 'GenderButton'} onClick={() => setGender(0)} >Male</button>
                    <button className={gender === 1 ? 'GenderButtonActive' : 'GenderButton'} onClick={() => setGender(1)} >Female</button>
                    <button className={gender === 2 ? 'GenderButtonActive' : 'GenderButton'} onClick={() => setGender(2)}>Other</button>
                </div>
            </div>
            <button className='Button' onClick={addToList}>
                Next
            </button>

        </div>
    )
}

export default InputCard