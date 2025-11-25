import React from 'react'
import { useState,useEffect } from 'react';
import Cards from './Cards'
import axios from 'axios';
function WomenTop() {
  const [womenTop,setWomenTop]=useState([]);
  const womenTopUrl="https://jsondatabase-1.onrender.com/top"

  useEffect(()=>{
    axios.get(womenTopUrl)
    .then((res)=>setWomenTop(res.data))
    .catch((err)=>console.log(err))
  })
  return (
    <div className='womentop'>
      <Cards Cards={womenTop} category="top"/>
    </div>
  )
}

export default WomenTop