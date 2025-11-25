import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Cards from './Cards';
function Tshirt() {
  const [tshirt,setTshirt]=useState([]);
  const url="https://jsondatabase-1.onrender.com/tshirts"
   useEffect(()=>{
      axios.get(url)
      .then((res)=> setTshirt(res.data))
      .catch((err)=>console.log(err))
    });
  return (
    <div className="tshirt">
        <Cards Cards={tshirt} category="tshirts"/>
    </div>
  )
}

export default Tshirt