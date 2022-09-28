/*import logo from './logo.svg';*/
import React from 'react';
import { useState ,useEffect} from 'react';

const Person = (pros)=>{
return(
  <><h1>name : {pros.name} </h1>
  <h1>last name : {pros.lastname}</h1>
  <h1>age : {pros.age}</h1>
  </>
)
}

  


const App1 = ()=> {
  const name ='dhurv'; //string
  const isShowing = true; //boolean value
  const [counter,setcounter]= useState(0  );
  
  // Similar to componentDidMount and componentDidUpdate:
 
  useEffect(() => {
    // Update the document title using the browser API
  
    document.title = `You clicked ${counter} times`;
  
  })
  return (
    <>
    <>-----------------</>
    <Person name = {name}
    age = {counter}/>
    <>-----------------</>
    <Person name = 'laik'age = {20} lastname ='fjie'/>
    <>-----------------</>
    <Person/>
    <>-----------------</>
    <div>
      {/* hooks */}
      <button onClick={() => setcounter(counter - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick ={() => setcounter(counter + 1)}>+</button>
    </div>
    <>-----------------</>

    <div>
      <h1>heloo &nbsp;{!isShowing ? name  : 'print wrong'}
      </h1>
    </div></>
  );
}

export default App1;
