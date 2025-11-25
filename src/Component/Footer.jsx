import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className="footer-section">
            <div className="col1">
                <h3>NEED HELP</h3>
                <p>Contact Us</p>
                <p>Track Orders</p>
                <p>Returns & Refunds</p>
                <p>FAQs</p>
                <p>My Account</p>
            </div>
            <div className="col2">
                <h3>COMPANY</h3>
                <p>About Us</p>
                <p>Careers</p>
            </div>
            <div className="col3">
                <h3>MORE INFO</h3>
                <p>T&C</p>
                <p>Privacy Policy</p>
                <p>Blogs</p>
            </div>
            <div className="col4">
                <h3>STORE NEAR ME</h3>
                <p>Chennai</p>
                <p>Bangalore</p>
                <p>Mumbai</p>
            </div>
        </div>
        <div className="follow">
            <div className="follow-us">
                <h5>© 2025 Tressy</h5>
            </div>
            <div className="keys">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-square-youtube"></i>
            </div>
        </div>
    </div>
  )
}

export default Footer