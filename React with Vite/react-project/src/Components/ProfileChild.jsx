import React from 'react'
import "./profile.css"
const ProfileChild = ({profileData:{id,name,age,city}}) => {
  return (
    <div>
        <h1>Profile using Props Child</h1>
        <p>Id:{id}</p>
        <p>Name:{name}</p>
        <p>Age:{age}</p>
        <p>City:{city}</p>
    </div>
  )
}

export default ProfileChild