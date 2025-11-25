import React from 'react'
import './Home.css'
import HomeSection from './HomeSection'
import Section from './Section'
function Home() {
 
  return (
    <div className='home'>
        <div className="home-image">
           <h1>WELCOME TO OUR TRESSY🛍️👗</h1>
            <p>Step into a world of fashion where elegance meets comfort effortlessly.Find outfits that match your mood, style, and every special moment.
Start your stylish journey today and let your wardrobe shine with confidence!👚👠👒</p>
            
        </div>
        <div className="section">
            <Section />
        </div>
        <div className="home-section">
            <HomeSection/>
        </div>
    </div>
  )
}

export default Home

