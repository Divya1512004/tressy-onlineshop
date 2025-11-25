import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios';
function WomenShirt() {
  const [womenShirt,setWomenShirt]=useState([]);
  const womenShirtUrl="https://jsondatabase-1.onrender.com/womenshirt"
  useEffect(()=>{
    axios.get(womenShirtUrl)
    .then((res)=>setWomenShirt(res.data))
    .catch((err)=>console.log(err))
  })
  return (
    <div className='womenShirt'>
      <Cards Cards={womenShirt} category="womenshirt"/>
    </div>
  )
}

export default WomenShirt