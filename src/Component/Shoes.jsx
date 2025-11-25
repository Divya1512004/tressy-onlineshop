import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
import Cards from './Cards'
function Shoes() {
    const [shoe,setShoe]=useState([]);
    const shoeUrl="https://jsondatabase-1.onrender.com/shoes"

    useEffect(()=>{
        axios.get(shoeUrl)
        .then((res)=>setShoe(res.data))
        .catch((err)=>console.log(err))
    })
  return (
    <div className='shoe'>
        <Cards Cards={shoe} category="shoes"/>
    </div>
  )
}
export default Shoes