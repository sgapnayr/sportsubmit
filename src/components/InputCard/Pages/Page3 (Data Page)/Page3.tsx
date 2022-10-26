import { AiOutlineCheck, AiFillEdit, AiOutlineDelete } from 'react-icons/ai'
import Axios from 'axios'
import './Page3.css'
import { Athlete } from '../../model'
import Button from '../../Components/Button/Button'

interface Props {
    titleText: string
    athleteList: Athlete[]
    setNext: React.Dispatch<React.SetStateAction<number>>
    newAthleteName: string[]
    setNewAthleteName: React.Dispatch<React.SetStateAction<string[]>>
}

const Page3: React.FC<Props> = ({ titleText, athleteList, setNext, newAthleteName, setNewAthleteName }) => {
    const updateAthlete = (id: string, newAthleteName: string) => {
        Axios.put(`http://localhost:3001/update/${id}`, { id: id, newAthleteName: newAthleteName })
        console.log(newAthleteName, id)
        console.log(test)
    }

    const deleteAthlete = (id: string) => {
        Axios.delete(`http://localhost:3001/delete/${id}`)
    }

    return (
        <div className='Confirmation'>
            <h1>
                <div className="SubmitText Text">{titleText === 'Thank you for your submission!' ? 'Thank you for your submission!' : <strong>Profiles</strong>}</div>
            </h1>
            <div className="Profiles">
                {athleteList.map((athlete, idx) => {
                    return (
                        <div className='Profile' key={idx}>
                            <div key={idx}>{athlete.name.toUpperCase()}: {athlete.tm.slice(0, 10).toUpperCase()}, {athlete.sprt} - ({athlete.gndr === 'Female' ? 'F' : athlete.gndr === 'Male' ? 'M' : 'NB'})</div>
                            <div className="Icons">
                                <button className='DeleteButton' onClick={() => deleteAthlete(athlete._id)}>< AiOutlineDelete /></button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Button onClickFunction={() => setNext(0)} buttonText={'Done'} buttonIcon={<AiOutlineCheck />} extraClasses={''} iconReverse={false} />
        </div >
    )
}

export default Page3