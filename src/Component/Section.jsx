import React from 'react'
import './Section.css'
import {Link} from 'react-router-dom'
function Section() {
  return (
    <div className="section">
        <div className="heading">
            <h2>Featured Collections</h2>
        </div>
            <div className="newarrivals">
                <Link to="/NewArrivals">
                <img src="/photos/kurthi1.jpg"/>
                    <h4>New Arrivals</h4>
                </Link>
                <Link to="/Perfumes">
                    <img src="/photos/perfume7.jpg"/>
                    <h4>Perfumes</h4>
                </Link>
                <Link to="/Shoes">
                    <img src="/photos/shoe5.jpg"/>
                    <h4>Shoes</h4>
                </Link>
                <Link to="/Watch">
                    <img src="/photos/watch5.jpg"/>
                    <h4>Watches</h4>
                </Link>
                <Link to="/Blazer">
                <img src="/photos/blazer4.jpg"/>
                <h4>Blazers</h4>
                </Link>
            </div>
    </div>
  )
}

export default Section