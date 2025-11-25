import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
import Cards from './Cards'
function Blazer() {
    const [blazer,setBlazer]=useState([]);
    const blazerUrl="https://jsondatabase-1.onrender.com/blazers"

    useEffect(()=>{
        axios.get(blazerUrl)
        .then((res)=>setBlazer(res.data))
        .catch((err)=>console.log(err))
    })
  return (
    <div className='blazer'>
        <Cards Cards={blazer} category="blazers"/>
    </div>
  )
}

export default Blazer