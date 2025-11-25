import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
import Cards from './Cards'
function Watch() {
    const [watch,setWatch]=useState([]);
    const watchUrl="https://jsondatabase-1.onrender.com/watches"

    useEffect(()=>{
        axios.get(watchUrl)
        .then((res)=>setWatch(res.data))
        .catch((err)=>console.log(err))
    })
  return (
    <div className='watch'>
        <Cards Cards={watch} category="watches"/>
    </div>
  )
}

export default Watch