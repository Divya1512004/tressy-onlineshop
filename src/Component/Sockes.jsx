import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios';
function Sockes() {
    const [sockes,setSockes]=useState([]);
    const sockesUrl="https://jsondatabase-1.onrender.com/sockes"

    useEffect(()=>{
        axios.get(sockesUrl)
        .then((res)=>setSockes(res.data))
        .catch((err)=>console.log(err))
    })
  return (
    <div className='sockes'>
        <Cards Cards={sockes} category="sockes"/>
    </div>
  )
}

export default Sockes