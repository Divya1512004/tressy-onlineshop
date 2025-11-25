import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios';
function HomeSection() {
    const [homeSection,setHomeSection]=useState([]);
    const homeSectionUrl="https://jsondatabase-1.onrender.com/section"

    useEffect(()=>{
        axios.get(homeSectionUrl)
        .then((res)=>setHomeSection(res.data))
        .catch((err)=>console.log(err))
    })
  return (
    <div className='home-section'>
        <Cards Cards={homeSection} category="section"/>
    </div>
  )
}

export default HomeSection