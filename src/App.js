import React from "react";
import Bike from './components/Bike'

function Good(){
  return (
    <div className="Good">
      <h1>This is Good</h1>
    </div>
  )
}

function Bad(){
  return (
    <div className="Bad">
      <h1>This is Bad</h1>
    </div>
  )
}

function Either(props){
  const isGood = props.isGood;
  if (isGood) {
    return <Good/>;
  }
  return <Bad/>;
}


function App() {
return(
    <div className="App">
      <hr/>
      <Bike name="Suzuki" model="3000"/>
      <hr/>
      <Either isGood={true}/>
    </div>
  )
}


export default App;
