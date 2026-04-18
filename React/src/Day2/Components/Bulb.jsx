import React,{useState} from 'react'
import "./bulb.css"
import bulbOn from "./bulbOff.jpeg"
import bulbOf from "./bulbOn.jpeg"
const Bulb = () => {
    const [status,setStatus]=useState(true);
    let toggle=()=>{
        setStatus(prev=>!prev);
    }
  return (
    <div>
        <h1>Room</h1>
        <img src={status?bulbOn:bulbOf} alt="BulbImage" />
        <button onClick={toggle}>{status?"Turn OFF":"Turn ON"}</button>
    </div>
  )
}

export default Bulb