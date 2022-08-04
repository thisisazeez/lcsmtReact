import React from "react";
import Bike from './components/Bike'

// function Good(){
//   return (
//     <div className="Good">
//       <h1>This is Good</h1>
//     </div>
//   )
// }

// function Bad(){
//   return (
//     <div className="Bad">
//       <h1>This is Bad</h1>
//     </div>
//   )
// }

// function Either(props){
//   const isGood = props.isGood;
//   if (isGood) {
//     return <Good/>;
//   }
//   return <Bad/>;
// }


function App() {
  // const bikes = ['Suzuki', 'BMW', 'Benz'] // list = bikes data = stored in the list `bikes`
  const bikes = [
    {id:1, brand:'Ford'},
    {id:2, brand:'Suzuki'},
    {id:3, brand:'BMW'},
    {id:4, brand:'Ducati'}
  ]
  console.log(bikes)
return(
    <div className="App">

      <h3>How many bikes do we have ?</h3>
      {/* <ul>
        {bikes.map((bikes) => <Bike brand={bikes}/>)} rendering the list to our bike component
      </ul> */}
      <ul>
        {bikes.map((bikes) => <Bike key={bikes.id} brand={bikes.brand}/>)}
      </ul>
      <hr/>
      {/* <Either isGood={true}/> */}
    </div>
  )
}


export default App;
