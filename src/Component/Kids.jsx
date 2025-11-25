import React from 'react'
import './Kids.css'
import KidsSection from './KidsSection'
import {Link} from 'react-router-dom'
function Kids() {
  return (
    <div className='kids'>
      <div className="kids-heading">
        <h2>Our Categories</h2>
      </div>
      <div className="kids-category">
        <Link to="/Girl">
          <img src="/photos/girl6.jpg"/>
          <h4>Girls</h4>
        </Link>
        <Link to="/Boy">
          <img src="/photos/boy1.jpg"/>
          <h4>Boys</h4>
        </Link>
        <Link to="/KidsFootWare">
          <img src="/photos/kidsfoot1.jpg"/>
          <h4>Footwears</h4>
        </Link>
      </div>
      <div className="kids-section">
        <KidsSection/>
      </div>
    </div>
  )
}

export default Kids