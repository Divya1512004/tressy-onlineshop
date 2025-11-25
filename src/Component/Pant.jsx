import React, { useContext } from 'react'
import { useState,useEffect } from 'react'
import Cards from './Cards'
import axios from 'axios'
function Pant() {
  const [pant,setPant]=useState([]);
  const panturl="https://jsondatabase-1.onrender.com/pants";

  useEffect(()=>{
    axios.get(panturl)
    .then((res)=> setPant(res.data))
    .catch((err)=>console.log(err))
  });
  return (
    <div className="pant">
        <Cards Cards={pant} category="pants"/>
    </div>
  )
}

export default Pant