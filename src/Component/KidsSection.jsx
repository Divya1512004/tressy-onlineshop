import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios';
function KidsSection() {
    const [kidsSection,setKidsSection]=useState([]);
    const kidsSectionUrl="https://jsondatabase-1.onrender.com/kids"

    useEffect(()=>{
        axios.get(kidsSectionUrl)
        .then((res)=>setKidsSection(res.data))
        .catch((err)=>console.log(err))
    })
  return (
    <div className="kids-section">
        <Cards Cards={kidsSection} category="kids"/>
    </div>
  )
}

export default KidsSection