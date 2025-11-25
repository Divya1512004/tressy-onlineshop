import React from 'react'
import './Men.css'
import {Link} from 'react-router-dom'
import MenSection from './MenSection'
function Men() {
  return (
    <div className="men">
      <div className="heading">
        <h2>Our Categories</h2>
      </div>
      <div className="categories">
        <Link to="/Shirt">
          <img src="/photos/shirt7.jpg"/>
          <h4>Shirts</h4>
        </Link>
        <Link to="/Pant">
          <img src="/photos/pant7.jpg"/>
          <h4>Pants</h4>
        </Link>
        <Link to="/Tshirt">
          <img src="/photos/tshirt8.jpg"/>
          <h4>Tshirts</h4>
        </Link>
        <Link to="/Short">
          <img src="/photos/short7.jpg"/>
          <h4>Shorts</h4>
        </Link>
      </div>
      <div className="men-section">
        <MenSection/>
      </div>
    </div>
  )
}

export default Men