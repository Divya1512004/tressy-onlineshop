import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios';
function NewArrival() {
    const [newArrival,setNewArrival]=useState([]);
    const newUrl="https://jsondatabase-1.onrender.com/newarrivals"

    useEffect(()=>{
        axios.get(newUrl)
        .then((res)=>setNewArrival(res.data))
        .catch((err)=>console.log(err))
    })
  return (
    <div className='newarrival'>
        <Cards Cards={newArrival} category="newarrivals"/>
    </div>
  )
}

export default NewArrival