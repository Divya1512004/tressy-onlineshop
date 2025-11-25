import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
import Cards from './Cards'
function Girl() {
    const [girl,setGirl]=useState([]);
    const girlUrl="https://jsondatabase-1.onrender.com/girls"

    useEffect(()=>{
        axios.get(girlUrl)
        .then((res)=>setGirl(res.data))
        .catch((err)=>console.log(err))
    })
  return (
    <div className='girl'>
        <Cards Cards={girl} category="girls"/>
    </div>
  )
}

export default Girl