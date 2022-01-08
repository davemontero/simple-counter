import { useState } from 'react'
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/App.css'

const App = () => {
    const [seconds, setSeconds] = useState(55)
    const [minutes, setMinutes] = useState(59)
    const [hours, setHours] = useState(0)
    
    const start = () => {
        setInterval(() => { setSeconds(seconds => seconds + 1) }, 1000)
    }

    if (seconds >= 60) {
        setSeconds(0)
        setMinutes(minutes + 1)
    }
    if (minutes >= 60) {
        setMinutes(0)
        setHours(hours + 1)
    }

    return (
        <section>
            <span className='box start' onClick={start}><FontAwesomeIcon icon={faClock} /></span>
            <span className='box'>{hours < 10 ? "0"+hours : hours}</span>
            <span className='box'>{minutes < 10 ? "0"+minutes : minutes}</span>
            <span className='box'>{seconds < 10 ? "0"+seconds : seconds}</span>
        </section>
    )
}

export default App