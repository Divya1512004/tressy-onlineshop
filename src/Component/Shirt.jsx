import axios from 'axios'
import {Link} from 'react-router-dom'
import {useState,useEffect, useContext} from 'react'
import Cards from './Cards.jsx'
function Shirt() {
    const [shirt,setShirt]=useState([]);
    const url="https://jsondatabase-1.onrender.com/shirts"
    useEffect(()=>{
      axios.get(url)
      .then((res)=>setShirt(res.data))
      .catch((err)=>console.error(err));
    })
  return (
    <div className="shirts">
        <Cards Cards={shirt} category="shirts"/>
    </div>
  )
}

export default Shirt