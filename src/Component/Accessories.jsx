import React from 'react'
import './accessories.css'
import {Link} from 'react-router-dom'
function Accessories() {
  return (
    <div className="accessories">
      <div className="accessory-heading">
        <h2>Our Categories</h2>
      </div>
      <div className="accessory">
        <Link to="/Handbag">
          <img src="/photos/handbag4.jpg"/>
          <h4>HandBags</h4>
        </Link>
        <Link to="/Sockes">
          <img src="/photos/sockes1.jpg"/>
          <h4>Socks</h4>
        </Link>
        <Link to="/Footware">
          <img src="/photos/footware2.jpg"/>
          <h4>FootWears</h4>
        </Link>
        <Link to="/MakeUp">
        <img src="/photos/makeup4.jpg"/>
        <h4>Cosmetics</h4>
        </Link>
      </div>
    </div>
  )
}

export default Accessories