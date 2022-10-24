import React, { useState } from 'react';
import './App.css';
import Image from './components/Image';
import InputCard from './components/InputCard';
import TitleCard from './components/TitleCard';

function App() {
  const [next, setNext] = useState<number>(0)
  const [gender, setGender] = useState<number>(4)
  const [athleteName, setAthleteName] = useState<string>('')
  const [dob, setDob] = useState<string>('')

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
      />
    </div>
  );
}

export default App;
