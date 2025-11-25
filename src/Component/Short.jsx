import React, { useEffect,useState } from 'react'
import Cards from './Cards';
import axios from 'axios';
function Short() {
  const [short,setShort]=useState([]);
  const shortUrl="https://jsondatabase-1.onrender.com/shorts";

  useEffect(()=>{
    axios.get(shortUrl)
    .then((res)=>setShort(res.data))
    .catch((err)=>console.log(err))
  })
  return (
    <div className='short'>
      <Cards Cards={short} category="shorts"/>
    </div>
  )
}

export default Short