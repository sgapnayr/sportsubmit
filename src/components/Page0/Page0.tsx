import React from 'react'
import Button from '../Button/Button'
import InputDiv from '../InputDiv/InputDiv'
import InterActiveButton from '../InterActiveButton/InterActiveButton'
import { FcNext } from 'react-icons/fc'
import './Page0.css'

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
}

const PageZero: React.FC<Props> = ({ next, setNext, athleteName, setAthleteName, dob, setDob, location, setLocation, team, setTeam, gender, setGender, setGenderProfile }) => {
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

    const showData = () => {
        setNext(5)
    }

    return (
        <div className='InputCard'>
            <InputDiv functionUsed={setAthleteName} valueUsed={athleteName} titleText={'Enter Athlete Name:'} type={'text'} placeholder='Enter Name Here...' />
            <InputDiv functionUsed={setDob} valueUsed={dob} titleText={'Date of Birth:'} type={'date'} placeholder='(e.g. 10-09-1993)' />
            <InputDiv functionUsed={setLocation} valueUsed={location} titleText={'Location:'} type={'text'} placeholder='(e.g. Boston)' />
            <InputDiv functionUsed={setTeam} valueUsed={team} titleText={'Team:'} type={'text'} placeholder='(e.g. New York Giants)' />
            <InterActiveButton gender={gender} setGender={setGender} setGenderProfile={setGenderProfile} />
            <Button onClickFunction={firstAdd} buttonText={'Next'} buttonIcon={<FcNext />} extraClasses={''} iconReverse={false} />
            <Button onClickFunction={showData} buttonText={'Show Data'} buttonIcon={''} extraClasses={'Red'} iconReverse={true} />
        </div>
    )
}

export default PageZero