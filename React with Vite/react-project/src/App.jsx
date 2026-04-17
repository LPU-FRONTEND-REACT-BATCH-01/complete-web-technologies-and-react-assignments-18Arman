// Component:
// Class Based Component: components formed to JS class( until react-16,this is being used)
// Function Based Componet: components from using JS function(after react-16, it is being used because of less
//boilerplate code)
// in component class we have a method called render method
// we have to export if we want to use it in other component
//diffrent types of export:
//named export requires destructuring because whatever we export it go as a object which we need to destructure
//let price=1000;
// export const ProductPrice=price;
//default export does'nt required it we can directly use that,but it can be used only once.
import React from "react";
import {Component} from "react";
import "./App.css"
// export default class App extends Component{
//     render(){
//         return <h1>Hello</h1>
//     }
// }

import Profile from "./Components/Profile"
let user1={
    id:1,
    name:"Arpit",
    age:10,
    city:"UP"
}
let user2={
    id:1,
    name:"Arpit",
    age:10,
    city:"UP"
}
let user3={
    id:1,
    name:"Arpit",
    age:10,
    city:"UP"
}
import ProfileChild from "./Components/ProfileChild";
let App=()=>{
    let name="Chota Bheem";
    return (
        <div >
        <Profile profileData={user1}/>
        <Profile profileData={user2}></Profile>
        <Profile profileData={user3}></Profile>
        <br /><br />
        <ProfileChild profileData={user1}></ProfileChild>
        <ProfileChild profileData={user2}></ProfileChild>
        <ProfileChild profileData={user3}></ProfileChild>
        </div>

    )
}
export default App;