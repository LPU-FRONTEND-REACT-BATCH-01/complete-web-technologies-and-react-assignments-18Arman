import React,{useState} from 'react'

const State = () => {
    const [state,setState]=useState(0);
    let normal=0;
    let handleNormal=()=>{
        normal+=5;
    }
    let handleState=()=>{
        setState(state+1);
    }
  return <div>
    <h1>The value of normal Var is:{normal}</h1>
    <h1>The value of state Var is:{state}</h1>
    <button onClick={handleNormal}>Normal</button>
    <button onClick={handleState}>State</button>
  </div>
}

export default State