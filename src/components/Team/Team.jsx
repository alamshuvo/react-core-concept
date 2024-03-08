import { useState } from 'react'
import './Team.css'
export default function Team() {
    const teamStyle ={
        color:'white',
        backgroundColor:'purple',
        border:'2px solid salmon',
        borderRadius:'15px',
        padding:'25px'
}
const conditionalStyle={
    color:'white',
    backgroundColor:'red',
    border:'2px solid salmon',
    borderRadius:'15px',
    padding:'25px'
}
const anotherConditionalStyle={
    color:'white',
    backgroundColor:'green',
    border:'2px solid salmon',
    borderRadius:'15px',
    padding:'25px'
}
    const [counter,setCounter]=useState(1);
    const handleAdd=()=>{
        setCounter(counter+1)
        if (counter>=10) {
            alert("please you cant add more")
            setCounter(counter)
        }
    }
    const handleRemove=()=>{
        setCounter(counter-1)
        if (counter==0) {
            alert("please you cant remove  more");
            setCounter(0)
        }
    }
    const refresh=()=>{
        setCounter(1)
    }


   return (
        <div style={ counter ? (counter==10 ? anotherConditionalStyle:teamStyle) : conditionalStyle} >
            <h2>The Team Member is {counter}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove} >Remove</button>
            <button  onClick={refresh}>Refresh</button>
        </div>
    )
}