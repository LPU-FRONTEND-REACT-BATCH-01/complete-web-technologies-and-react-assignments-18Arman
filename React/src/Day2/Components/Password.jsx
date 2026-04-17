import React,{useState} from 'react'

const Password = () => {
    const [show,setToggle]=useState(true);
    let toggle=()=>{
        setToggle(prev=>!prev);
    }   
  return (
    <div>
        <input type={show?"password":"text"}/>
        <i class={show?"fa-regular fa-eye":"fa-solid fa-eye-slash"} onClick={toggle}></i>
        {/* <button onClick={unsetVisible}>Visible</button> */}
    </div>
  )
}
export default Password