import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios';
function WomenPant() {
  const [womenPant,setWomnePant]=useState([]);
  const womenPantUrl="https://jsondatabase-1.onrender.com/womenpant"

  useEffect(()=>{
    axios.get(womenPantUrl)
    .then((res)=>setWomnePant(res.data))
    .catch((err)=>console.log(err))
  })
  return (
    <div className='womenPant'>
        <Cards Cards={womenPant} category="womenpant"/>
    </div>
  )
}

export default WomenPant