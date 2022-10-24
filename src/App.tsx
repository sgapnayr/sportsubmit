import React, { useState } from 'react';
import './App.css';
import Image from './components/Image';
import InputCard from './components/InputCard';
import { Athlete } from './components/model';
import TitleCard from './components/TitleCard';

function App() {
  const [next, setNext] = useState<number>(0)
  const [gender, setGender] = useState<number>(4)
  const [athleteName, setAthleteName] = useState<string>('')
  const [dob, setDob] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [team, setTeam] = useState<string>('')
  const [genderProfile, setGenderProfile] = useState<string>('')
  const [sport, setSport] = useState<string>('')
  const [aboutProfile, setAboutProfile] = useState<string>('')
  const [interests, setInterests] = useState<string>('')

  const [athleteList, setAthleteList] = useState<Athlete[]>([])

  return (
    <div className="App">
      <Image />
      <TitleCard />
      <InputCard
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
        athleteList={athleteList}
        setAthleteList={setAthleteList}
      />
    </div>
  );
}

export default App;
