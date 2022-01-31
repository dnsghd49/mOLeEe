import { useState } from 'react'
import Mole from "../Mole"
import EmptySlot from "../EmptySlot"
import "./style.css"

function MoleContainer(props) {
    let [displayMole, setdisplayMole] = useState(false)

    const boPPed = (e) => {
        props.setScore(props.score + 1)
        setdisplayMole(false)
    }

    let displayMoles = displayMole ? <Mole setScore={props.setScore} toggle={setdisplayMole} handleClick={boPPed} /> : <EmptySlot toggle={setdisplayMole} />
    return (
        <div className="container">
            {displayMoles}
        </div>
    )
}

export default MoleContainer