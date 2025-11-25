import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios';
function KidsFootWare() {
    const [kidsFoot,setKidsFoot]=useState([]);
    const kidsFootUrl="https://jsondatabase-1.onrender.com/kidsfoot"

    useEffect(()=>{
        axios.get(kidsFootUrl)
        .then((res)=>setKidsFoot(res.data))
        .catch((err)=>console.log(err))
    })
  return (
    <div className='kidsfoot'>
        <Cards Cards={kidsFoot} category="kidsfoot"/>
    </div>
  )
}

export default KidsFootWare