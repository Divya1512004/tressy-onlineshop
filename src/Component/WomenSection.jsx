import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios';
function WomenSection() {
  const [womenSection,setWomenSection]=useState([]);
  const womenSectionUrl="https://jsondatabase-1.onrender.com/women";

  useEffect(()=>{
    axios.get(womenSectionUrl)
    .then((res)=>setWomenSection(res.data))
    .catch((err)=>console.log(err))
  })
  return (
    <div className='women-section'>
      <Cards Cards={womenSection} category="women"/>
    </div>
  )
}
export default WomenSection