import { useEffect } from 'react'
import moleImg from "./mole.png"

function Mole(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 2000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{ 'width': '30em' }} src={moleImg} onClick={props.handleClick} alt='Mole out!' />
        </div>
    )
}

export default Mole
