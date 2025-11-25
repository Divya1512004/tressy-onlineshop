import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios';
function Handbag() {
    const [handbag,setHandbag]=useState([]);
    const handbagUrl="https://jsondatabase-1.onrender.com/handbags"

    useEffect(()=>{
        axios.get(handbagUrl)
        .then((res)=>setHandbag(res.data))
        .catch((err)=>console.log(err))
    })
  return (
    <div className='handbag'>
        <Cards Cards={handbag} category="handbags"/>
    </div>
  )
}

export default Handbag