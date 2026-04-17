import React,{userState} from 'react'
import { useEffect } from 'react';
const FbcUseEffect = () => {
  console.log("Component Rendered");
  useEffect(()=>{
    console.log("Use Effect Executed!");
  })
  
  return (
    <div>FbcUseEffect</div>
  )
}

export default FbcUseEffect