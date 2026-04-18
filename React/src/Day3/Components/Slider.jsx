import React from 'react'
import { useState } from 'react';
import img1 from "./bulbOff.jpeg"
import img2 from "./bulbOn.jpeg"
import img3 from "./roadimage.jpeg"
import "./slider.css"
const Slider = () => {
     let images=[img1,img2,img3];
     let totalImages=images.length
     const [index,setIndex]=useState(0);
    console.log(index);
     let nextImage=()=>{
      setIndex((next)=>{
       return (next+1) % totalImages
      });
     }
     let prevImage=()=>{
      setIndex((prev)=>{
        return (prev-1)<0?totalImages-1:prev-1;
      })
     };
    
  return (
    <div>     
      <button onClick={prevImage}>Previous Image</button>
      <img src={images[index]} alt="Image" />
      <button onClick={nextImage}>Next Image</button>
    </div>
  )
}

export default Slider