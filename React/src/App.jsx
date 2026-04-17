import React from 'react'
import Password from './Day2/Components/password.jsx'
let user1={
    name:"Arman",
    age:21,
    email:"18arman@gmail.com"
}
let user2={
    name:"Arpit",
    age:22,
    email:"21arpit@gmail.com"
}
import Bulb from './Day2/Components/Bulb.jsx'
import fbc from './Day2/Components/FbcUseEffect.jsx'
const App = () => {
  return <div>
    <Bulb/>
    <fbc/>
  </div>
}

export default App