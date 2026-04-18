// Component:
// Class Based Component: components formed to JS class( until react-16,this is being used)
// Function Based Componet: components from using JS function(after react-16, it is being used because of less
//boilerplate code)
// in component class we have a method called render method
// we have to export if we want to use it in other component
//diffrent types of export:
//named export requires destructuring because whatever we export it go as a object which we need to destructure
//default export does'nt required it we can directly use that,but it can contains only 1 element.
import React from "react";
export default class App extends Component{
    render(){
        <h1>Hello</h1>
    }
}