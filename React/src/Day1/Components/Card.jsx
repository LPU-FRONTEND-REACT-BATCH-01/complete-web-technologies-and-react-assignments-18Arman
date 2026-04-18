import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div>
        <h1>Profile</h1>
        <p>Name:{props.param.name}</p>
        <p>Age:{props.param.age}</p>
        <p>Email:{props.param.email}</p>
    </div>
  )
}

export default Card