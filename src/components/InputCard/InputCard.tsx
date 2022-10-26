import React, { useEffect } from 'react'
import './InputCard.css'
import Axios from 'axios'
import { Athlete } from './model'
import Page0 from './Pages/Page0/Page0'
import Page1 from './Pages/Page1 (First PopUp)/Page1'
import Page2 from './Pages/Page2 (Second PopUp)/Page2'
import Page3 from './Pages/Page3 (Data Page)/Page3'

interface Props {
    next: number
    setNext: React.Dispatch<React.SetStateAction<number>>
    gender: number
    setGender: React.Dispatch<React.SetStateAction<number>>
    athleteName: string
    setAthleteName: React.Dispatch<React.SetStateAction<string>>
    newAthleteName: string[]
    setNewAthleteName: React.Dispatch<React.SetStateAction<string[]>>
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

const InputCard: React.FC<Props> = ({ next, setNext, gender, setGender, athleteName, setAthleteName, newAthleteName, setNewAthleteName, dob, setDob, location, setLocation, team, setTeam, genderProfile, setGenderProfile, sport, setSport, aboutProfile, setAboutProfile, interests, setInterests, athleteList, setAthleteList }) => {

    useEffect(() => {
        Axios.get('/read').then((res) => {
            setAthleteList(res.data)
        })
    }, [athleteList])

    return (
        <>
            <Page0
                setNext={setNext}
                next={next}
                gender={gender}
                setGender={setGender}
                athleteName={athleteName}
                setAthleteName={setAthleteName}
                dob={dob}
                setDob={setDob}
                location={location}
                setLocation={setLocation}
                team={team}
                setTeam={setTeam}
                genderProfile={genderProfile}
                setGenderProfile={setGenderProfile}
                sport={sport}
                setSport={setSport}
                aboutProfile={aboutProfile}
                setAboutProfile={setAboutProfile}
                interests={interests}
                setInterests={setInterests}
            />

            {next === 1 ?
                <Page1
                    aboutProfile={aboutProfile}
                    setAboutProfile={setAboutProfile}
                    interests={interests}
                    setInterests={setInterests}
                    sport={sport}
                    setSport={setSport}
                    next={next}
                    setNext={setNext}
                />

                : next === 2 ?
                    <Page2
                        setNext={setNext}
                        next={next}
                        gender={gender}
                        setGender={setGender}
                        athleteName={athleteName}
                        setAthleteName={setAthleteName}
                        dob={dob}
                        setDob={setDob}
                        location={location}
                        setLocation={setLocation}
                        team={team}
                        setTeam={setTeam}
                        genderProfile={genderProfile}
                        setGenderProfile={setGenderProfile}
                        sport={sport}
                        setSport={setSport}
                        aboutProfile={aboutProfile}
                        setAboutProfile={setAboutProfile}
                        interests={interests}
                        setInterests={setInterests}
                    />

                    : next === 3 ?
                        <Page3
                            titleText={'Thank you for your submission!'}
                            athleteList={athleteList}
                            setNext={setNext}
                            newAthleteName={newAthleteName}
                            setNewAthleteName={setNewAthleteName}
                        />

                        : next === 5 ?
                            <Page3
                                titleText={''}
                                athleteList={athleteList}
                                setNext={setNext}
                                newAthleteName={newAthleteName}
                                setNewAthleteName={setNewAthleteName}
                            />
                            : null
            }

        </>
    )
}

export default InputCard