import React from 'react'
import './Button.css'

interface Props {
    buttonText: string
    buttonIcon: any
    extraClasses: string
    onClickFunction: () => void
    iconReverse: boolean
}

const Button: React.FC<Props> = ({ buttonText, buttonIcon, extraClasses, iconReverse, onClickFunction }) => {
    return (
        <div>
            <button className={`Button ${extraClasses}`} onClick={onClickFunction}>
                <div className="ButtonText">
                    <div className={iconReverse ? 'Icon Reverse' : 'none'}>{buttonIcon}</div>
                    <div className="Text">{buttonText}</div>
                    <div className={iconReverse ? 'none' : 'Icon'}>{buttonIcon}</div>
                </div>
            </button>
        </div>
    )
}

export default Button