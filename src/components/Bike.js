function Bike(props){
    const startBike = () => {
        alert("Starting Bike now...")
    }

    const offBike = (a) => {
        alert(a)
    }
    return (
        <div className="Bike">           
            <hr />
            <li>I am a {props.brand}</li>
            <button onClick={startBike}>Start The Bike!</button>
            <button onClick={ () => offBike("Offing Bike Now .....")}>Off The Bike!</button>
        </div>
    )
}

export default Bike;