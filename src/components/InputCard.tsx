import React, { useState, useEffect } from 'react'
import './Styles.css'
import Axios from 'axios'
import { Athlete } from './model'
import { AiOutlineCheck, AiFillEdit, AiOutlineDelete } from 'react-icons/ai'
import { FcNext } from 'react-icons/fc'
import InputDiv from './InputDiv/InputDiv'

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
    const [newInputActive, setNewInputActive] = useState<boolean>(false)
    const [newAthleteName, setnewAthleteName] = useState<string>('')

    const showData = () => {
        setNext(5)
    }

    const firstAdd = () => {
        if (next && !athleteName || !dob || !location || !team) {
            window.alert('Please fill out all of our sections before continuing!')
            return
        }
        if (next < 1) {
            setNext(next + 1)
        }
        return
    }

    const secondAdd = () => {
        if (!athleteName || !dob || !location || !team || !sport || !aboutProfile || !interests) {
            window.alert('Ah, I see you tried to pull a fast one... Please fill out the remaining sections before moving on.')
            return
        }
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
        if (!athleteName || !dob || !location || !team || !sport || !aboutProfile || !interests) {
            window.alert('Please fill out all of our sections before continuing...')
            return
        }
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
    }, [athleteList])

    // Need to figure out bug
    const updateAthlete = (id: string) => {
        Axios.put('http://localhost:3001/update', { id: id, newAthleteName: newAthleteName })
    }

    const deleteAthlete = (id: string) => {
        Axios.delete(`http://localhost:3001/delete/${id}`)
    }

    const changeAthleteList = (idx: number, newName: string) => {
        const newList = athleteList;
        newList[idx].name = newName
        setAthleteList(newList)
    }

    return (
        <div className='InputCard'>

            {next === 5 ? <div className='Confirmation'>
                <div className="InputDiv">
                    <h1>
                        <div className="ButtonText">
                            <div className="Text">Profiles</div>
                        </div>
                    </h1>
                </div>

                <div className="Profiles">
                    {athleteList.map((athlete, idx) => {
                        return (
                            <div className='Profile'>
                                {newInputActive ?
                                    <div key={idx}>{athlete.name.toUpperCase()}: {athlete.tm.slice(0, 10).toUpperCase()}, {athlete.sprt} - ({athlete.gndr === 'Female' ? 'F' : athlete.gndr === 'Male' ? 'M' : 'NB'})

                                    </div>
                                    : <div key={idx}>{athlete.name.toUpperCase()}: {athlete.tm.slice(0, 10).toUpperCase()}, {athlete.sprt} - ({athlete.gndr === 'Female' ? 'F' : athlete.gndr === 'Male' ? 'M' : 'NB'})</div>}
                                <input
                                    type='text'
                                    placeholder={athlete.name}
                                    onSubmit={(e) => changeAthleteList(idx, athleteName)}
                                    className='NewInput'
                                    onChange={(e) => setAthleteName(e.target.value)}
                                    value={athleteName}
                                />
                                <div className="Icons">
                                    <button className='EditButton' onClick={() => setNewInputActive(!newInputActive)}>< AiFillEdit /></button>
                                    <button className='EditButton' onClick={() => deleteAthlete(athlete._id)}>< AiOutlineDelete /></button>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <button className='Button' onClick={() => setNext(0)}>
                    <div className="ButtonText">
                        <div className="Text">Done</div>
                        <div className="Icon"><AiOutlineCheck /></div>

                    </div>
                </button>
            </div > : null}

            {next === 3 ? <div className='Confirmation'>
                <div className="InputDiv">
                    <h1>
                        <div className="ButtonText">
                            <div className="Text">Thank you for your submission!</div>
                        </div>
                    </h1>
                </div>

                <div className="Profiles">
                    {athleteList.map((athlete, idx) => {
                        return (
                            <div className='Profile'>
                                {newInputActive ?
                                    <div key={idx}>{athlete.name.toUpperCase()}: {athlete.tm.slice(0, 10).toUpperCase()}, {athlete.sprt} - ({athlete.gndr === 'Female' ? 'F' : athlete.gndr === 'Male' ? 'M' : 'NB'})

                                    </div>
                                    : <div key={idx}>{athlete.name.toUpperCase()}: {athlete.tm.slice(0, 10).toUpperCase()}, {athlete.sprt} - ({athlete.gndr === 'Female' ? 'F' : athlete.gndr === 'Male' ? 'M' : 'NB'})</div>}
                                <input
                                    type='text'
                                    placeholder={athlete.name}
                                    onSubmit={(e) => changeAthleteList(idx, athleteName)}
                                    className='NewInput'
                                    onChange={(e) => setAthleteName(e.target.value)}
                                    value={athleteName}
                                />
                                <div className="Icons">
                                    <button className='EditButton' onClick={() => setNewInputActive(!newInputActive)}>< AiFillEdit /></button>
                                    <button className='EditButton' onClick={() => deleteAthlete(athlete._id)}>< AiOutlineDelete /></button>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <button className='Button' onClick={() => setNext(0)}>
                    <div className="ButtonText">
                        <div className="Text">Done</div>
                        <div className="Icon"><AiOutlineCheck /></div>

                    </div>
                </button>
            </div > : null}

            {
                next === 2 ? <div className='EditPage'>
                    <div className="InputDiv">
                        <h1>Your Profile</h1>
                    </div>
                    <div className="ProfilePage">
                        <p><span className='ProfileTag'>Name:</span> {athleteName}</p>
                        <p><span className='ProfileTag'>Date of Birth:</span> {dob}</p>
                        <p><span className='ProfileTag'>Location:</span> {location}</p>
                        <p><span className='ProfileTag'>Team:</span> {team}</p>
                        <p><span className='ProfileTag'>Gender:</span>{gender === 0 ? 'Male' : gender === 1 ? 'Female' : 'Other'}</p>
                        <p><span className='ProfileTag'>Sport:</span> {sport}</p>
                        <p><span className='ProfileTag'>About:</span> {aboutProfile.length > 10 ? aboutProfile.slice(0, 20) + '...' : aboutProfile}</p>
                        <p><span className='ProfileTag'>Interests:</span> {interests}</p>
                    </div>
                    <button className='Button' onClick={submitButton}>
                        <div className="ButtonText">
                            <div className="Text">Confirm</div>
                            <div className="Icon"><FcNext /></div>
                        </div>
                    </button>
                    <button className='Button Red' onClick={() => setNext(next - 1)}>
                        <div className="ButtonText">
                            <div className="Icon Reverse"><FcNext /></div>
                            <div className="Text">Go Back</div>
                        </div>
                    </button>
                </div> : null
            }

            {
                next === 1 ? <div className='PopUp'>
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
                            <option value="Etc...">Etc...</option>
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
                    <button className='Button' onClick={secondAdd}>
                        <div className="ButtonText">
                            <div className="Text">Next</div>
                            <div className="Icon"><FcNext /></div>
                        </div>
                    </button>
                    <button className='Button Red' onClick={() => setNext(next - 1)}>
                        <div className="ButtonText">
                            <div className="Icon Reverse"><FcNext /></div>
                            <div className="Text">Go Back</div>
                        </div>
                    </button>

                </div> : null
            }

            <InputDiv functionUsed={setAthleteName} valueUsed={athleteName} titleText={'Enter Athlete Name:'} type={'text'} />
            <InputDiv functionUsed={setDob} valueUsed={dob} titleText={'Date of Birth:'} type={'date'} />

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
            <button className='Button' onClick={firstAdd}>
                <div className="ButtonText">
                    <div className="Text">Next</div>
                    <div className="Icon"><FcNext /></div>
                </div>
            </button>

            <button className='Button Red' onClick={showData}>
                <div className="ButtonText">
                    <div className="Text">Show Data</div>
                </div>
            </button>

        </div >
    )
}

export default InputCard