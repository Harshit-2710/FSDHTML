import React, { useState } from 'react'
import './imageman.css';
import cat from './R.jpg'    
function ImageManipulation() {
const[height,setHeight]=useState(100);
const[angle,setAngle]=useState(30);
const[red,setRed]=useState();
const[green,setGreen]=useState();
const[blue,setBlue]=useState();
function enhanceHeight(){
    setHeight(height+20)
}
function dorotate(){
    setAngle(angle+30)
}
function changecolor(){
    setRed(Math.random()*255);
    setGreen(Math.random()*255);
    setBlue(Math.random()*255);
}
    return (
    <div className='container'>
        <div style={{backgroundColor:`RGB(${red},${green},${blue})`,marginTop:'70px',marginLeft:'200px' ,height:'200px' ,width:'200px', border:'2px solid red'}}>
            <img src={cat} height={height} width={200} style={{transform:`rotate(${angle}deg)`}}/>
        </div>
        <div style={{border:'2px solid red', marginTop:'50px', paddingLeft:'60px'}}>

            <button onClick={enhanceHeight} style={{backgroundColor:'cyan',color:'green'}}>Enhance Height</button>&nbsp;&nbsp;&nbsp;
            <button>EnhanceWidth</button>&nbsp;&nbsp;&nbsp;
            <button onClick={changecolor}>ColorChANGE</button>&nbsp;&nbsp;&nbsp;
            <button onClick={dorotate}>Rotate</button>
        </div>
    </div>
  )
}

export default ImageManipulation