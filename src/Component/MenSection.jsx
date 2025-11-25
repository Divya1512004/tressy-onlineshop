import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios';
function MenSection() {
    const [menSection,setMenSection]=useState([]);
    const menSectionUrl="https://jsondatabase-1.onrender.com/men"

    useEffect(()=>{
        axios.get(menSectionUrl)
        .then((res)=>setMenSection(res.data))
        .catch((err)=>console.log(err))
    })
  return (
    <div className='men-section'>
        <Cards Cards={menSection} category="men"/>
    </div>
  )
}

export default MenSection