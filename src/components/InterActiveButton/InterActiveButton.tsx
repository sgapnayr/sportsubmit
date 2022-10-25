import React from 'react'
import './InterActiveButton.css'

interface Props {
    gender: number
    setGender: React.Dispatch<React.SetStateAction<number>>
    setGenderProfile: React.Dispatch<React.SetStateAction<string>>
}

const InterActiveButton: React.FC<Props> = ({ gender, setGender, setGenderProfile }) => {
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
    return (
        <div className="InterActiveButton">
            <h3>Gender</h3>
            <div className="GenderButtonDiv">
                <button className={gender === 0 ? 'GenderButtonActive' : 'GenderButton'} onClick={maleButton} >Male</button>
                <button className={gender === 1 ? 'GenderButtonActive' : 'GenderButton'} onClick={femaleButton} >Female</button>
                <button className={gender === 2 ? 'GenderButtonActive' : 'GenderButton'} onClick={otherButton}>Other</button>
            </div>
        </div>
    )
}

export default InterActiveButton