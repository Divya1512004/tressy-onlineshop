import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
import Cards from './Cards'
function Perfume() {
    const [perfume,setPerfume]=useState([]);
    const perfumeUrl="https://jsondatabase-1.onrender.com/perfume"

    useEffect(()=>{
        axios.get(perfumeUrl)
        .then((res)=>setPerfume(res.data))
        .catch((err)=>console.log(err))
    })
  return (
    <div className='perfume'>
        <Cards Cards={perfume} category="perfume"/>
    </div>
  )
}

export default Perfume