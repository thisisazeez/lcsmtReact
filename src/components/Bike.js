function Bike(props){
    const startBike = () => {
        alert("Starting Bike now...")
    }

    const offBike = (a) => {
        alert(a)
    }
    return (
        <div className="Bike">           
            <h6>Using Bike Component</h6>
            <hr />
            <h2>This Bike is {props.name} Branded</h2>
            <hr />
            <h3>The model of this bike is {props.model}</h3>
            <button onClick={startBike}>Start The Bike!</button>
            <button onClick={ () => offBike("Offing Bike Now .....")}>Off The Bike!</button>
        </div>
    )
}

export default Bike;