import Button from '../../Components/Button/Button'
import { FcNext } from 'react-icons/fc'
import Axios from 'axios'
import './Page2.css'

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

const PageTwoPopUp: React.FC<Props> = ({ next, setNext, gender, setGender, athleteName, setAthleteName, dob, setDob, location, setLocation, team, setTeam, genderProfile, setGenderProfile, sport, setSport, aboutProfile, setAboutProfile, interests, setInterests }) => {
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

        Axios.post('/insert', { name: athleteName, dob: dob, loc: location, tm: team, gndr: genderProfile, sprt: sport, about: aboutProfile, intrsts: interests })
    }
    return (
        <div className='PageTwoPopUp'>
            <h1><strong>Your Profile</strong></h1>
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

            <Button onClickFunction={submitButton} buttonText={'Confirm'} buttonIcon={<FcNext />} extraClasses={''} iconReverse={false} />
            <Button onClickFunction={() => setNext(next - 1)} buttonText={'Go Back'} buttonIcon={<FcNext />} extraClasses={'Red'} iconReverse={true} />

        </div>
    )
}

export default PageTwoPopUp