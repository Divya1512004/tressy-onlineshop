import React from 'react'
import './Women.css'
import {Link} from 'react-router-dom'
import WomenSection from './WomenSection'
function Women() {
  return (
    <div className='women'>
      <div className="women-heading">
        <h2>Our Categories</h2>
      </div>
      <div className="women-category">
        <Link to="/WomenShirt">
          <img src="/photos/womenshirt2.jpg"/>
          <h4>Shirts</h4>
        </Link>
        <Link to="/WomenPant">
          <img src="/photos/womenpant2.jpg"/>
          <h4>Pants</h4>
        </Link>
        <Link to="/WomenTop">
          <img src="/photos/top2.jpg"/>
          <h4>Tops</h4>
        </Link>
        <Link to="/WomenDress">
          <img src="/photos/dress2.jpg"/>
          <h4>Dresses</h4>
        </Link>
      </div>
      <div className="women-section">
        <WomenSection/>
      </div>
    </div>
  )
}

export default Women