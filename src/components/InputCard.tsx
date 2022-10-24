import React, { useState } from 'react'
import './Styles.css'

interface Props {
    next: number
    gender: number
    setNext: React.Dispatch<React.SetStateAction<number>>
    setGender: React.Dispatch<React.SetStateAction<number>>
}

const InputCard: React.FC<Props> = ({ setNext, next, gender, setGender }) => {
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
                <button className='Button' onClick={() => setNext(3)}>
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
                <button className='Button' onClick={() => setNext(2)}>
                    Next
                </button>

            </div> : null}

            <div className="InputDiv">
                <h3>Enter Athlete Name:</h3>
                <input type="text" className='InputBox' placeholder='Enter Athlete Name...' />
            </div>
            <div className="InputDiv">
                <h3>Date of Birth:</h3>
                <input type="date" className='InputBox Date' placeholder='Oct 23, 1999' />
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
            <button className='Button' onClick={() => setNext(1)}>
                Next
            </button>

        </div>
    )
}

export default InputCard