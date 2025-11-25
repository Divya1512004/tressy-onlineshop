import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios';
function footWare() {
    const [footWare,setFootWare]=useState([]);
    const footWareUrl="https://jsondatabase-1.onrender.com/footwears"

    useEffect(()=>{
        axios.get(footWareUrl)
        .then((res)=>setFootWare(res.data))
        .catch((err)=>console.log(err))
    })
  return (
    <div className='footware'>
        <Cards Cards={footWare} category="footwears"/>
    </div>
  )
}

export default footWare