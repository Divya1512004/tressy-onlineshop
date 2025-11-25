import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios';
function WomenDress() {
  const [womenDress,setWomenDress]=useState([]);
  const womenDressUrl="https://jsondatabase-1.onrender.com/dress";

  useEffect(()=>{
    axios.get(womenDressUrl)
    .then((res)=>setWomenDress(res.data))
    .catch((err)=>console.log(err))
  })
  return (
    <div className='womenDress'>
      <Cards Cards={womenDress} category="dress"/>
    </div>
  )
}

export default WomenDress