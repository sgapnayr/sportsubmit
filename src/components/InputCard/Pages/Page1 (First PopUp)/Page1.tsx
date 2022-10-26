import Button from '../../Components/Button/Button'
import InputDiv from '../../Components/InputDiv/InputDiv'
import { FcNext } from 'react-icons/fc'
import './Page1.css'

interface Props {
    sport: string
    setSport: React.Dispatch<React.SetStateAction<string>>
    aboutProfile: string
    setAboutProfile: React.Dispatch<React.SetStateAction<string>>
    interests: string
    setInterests: React.Dispatch<React.SetStateAction<string>>
    next: number
    setNext: React.Dispatch<React.SetStateAction<number>>
}

const PageOnePopUp: React.FC<Props> = ({ aboutProfile, setAboutProfile, interests, setInterests, sport, setSport, next, setNext }) => {
    const addSport = (sport: string) => {
        setSport(sport)
    }

    const secondAdd = () => {
        if (!sport || !aboutProfile || !interests) {
            window.alert('Ah, I see you tried to pull a fast one... Please fill out the remaining sections before moving on.')
            return
        }
        setNext(next + 1)
    }

    return (
        <div className='PopUp'>
            <h3>Sport</h3>
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

            <InputDiv functionUsed={setAboutProfile} valueUsed={aboutProfile} titleText={'About'} type={'text'} placeholder='How did you get into your sport?' />
            <InputDiv functionUsed={setInterests} valueUsed={interests} titleText={'Interests'} type={'text'} placeholder='(e.g. Cornhole, Fishing)' />
            <Button onClickFunction={secondAdd} buttonText={'Next'} buttonIcon={<FcNext />} extraClasses={''} iconReverse={false} />
            <Button onClickFunction={() => setNext(next - 1)} buttonText={'Go Back'} buttonIcon={<FcNext />} extraClasses={'Red'} iconReverse={true} />

        </div>
    )
}

export default PageOnePopUp