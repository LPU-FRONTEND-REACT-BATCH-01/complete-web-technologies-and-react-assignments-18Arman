import React from 'react'
import {useState} from 'react'
import { useEffect } from 'react';
const FbcUseEffect = () => {
  console.log("Component Rendered");
  const [state,setState]=useState(0);

  const [state2,setState2]=useState(0);
  useEffect(()=>{
    console.log("Use Effect Executed!");
  },[state])
  let increment=()=>{
    setState(prev=>prev+1);
  }
  let increment2=()=>{
    setState2(prev=>prev+1);
  }
  return (
    <div>
      <h1>In FBC Container</h1>
      <button onClick={increment}>Click</button>
      <button onClick={increment2}>Click2</button>
    </div>
  )
}
export default FbcUseEffect