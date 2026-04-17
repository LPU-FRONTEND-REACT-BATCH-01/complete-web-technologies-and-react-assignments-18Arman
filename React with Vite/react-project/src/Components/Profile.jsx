import React from 'react'
import "./profile.css"
const Profile = (props) => {
  return (
    <div>
        <h1>Profile using Props</h1>
        <p>Id:{props.profileData.id}</p>
        <p>Name:{props.profileData.name}</p>
        <p>Age:{props.profileData.age}</p>
        <p>City:{props.profileData.city}</p>
    </div>
  )
}

export default Profile