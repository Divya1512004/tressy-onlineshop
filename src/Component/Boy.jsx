import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
import Cards from './Cards'
function Boy() {
    const [boy,setBoy]=useState([]);
    const boyUrl="https://jsondatabase-1.onrender.com/boys"

    useEffect(()=>{
        axios.get(boyUrl)
        .then((res)=>setBoy(res.data))
        .catch((err)=>console.log(err))
    })
  return (
    <div className='boy'>
        <Cards Cards={boy} category="boys"/>
    </div>
  )
}

export default Boy