import React, { useState } from 'react';
import './App.css';
import Image from './components/Image';
import InputCard from './components/InputCard';
import TitleCard from './components/TitleCard';

function App() {
  const [next, setNext] = useState<number>(0)
  const [gender, setGender] = useState<number>(4)
  const [athleteName, setAthleteName] = useState<string>('')

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
      />
    </div>
  );
}

export default App;
