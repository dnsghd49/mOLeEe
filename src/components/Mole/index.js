import moleImg from "./mole.png"

function Mole() {
    return (
        <div>
            <img style={{ 'width': '15em' }} src={moleImg} onClick={props.handleClick} />
        </div>
    )
}

export default Mole
