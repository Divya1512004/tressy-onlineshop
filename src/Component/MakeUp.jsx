import axios from 'axios'
import {Link} from 'react-router-dom'
import {useState,useEffect,useContext} from 'react'
import Cards from './Cards.jsx'
function MakeUp() {
    const [makeUp,setMakeUp]=useState([]);
    const url="https://jsondatabase-1.onrender.com/makeup"
    useEffect(()=>{
      axios.get(url)
      .then((res)=>setMakeUp(res.data))
      .catch((err)=>console.error(err));
    })
  return (
    <div className="makeup">
        <Cards Cards={makeUp} category="makeup"/>
    </div>
  )
}

export default MakeUp