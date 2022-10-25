import React from 'react'
import './InputDiv.css'

interface Props {
    titleText: string
    valueUsed: string
    type: string
    placeholder: string
    functionUsed: React.Dispatch<React.SetStateAction<string>>
}

const InputDiv: React.FC<Props> = ({ titleText, valueUsed, type, placeholder, functionUsed }) => {
    return (
        <div className="InputDiv">
            <h3>{titleText}</h3>
            <input type={type} className='InputBox' placeholder={placeholder} onChange={(e) => functionUsed(e.target.value)} value={valueUsed} />
        </div>
    )
}

export default InputDiv