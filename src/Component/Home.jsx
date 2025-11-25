import React from 'react'
import './Home.css'
import HomeSection from './HomeSection'
import Section from './Section'
function Home() {
  return (
    <div className='home'>
        <div className="home-image">
            <h1>WELCOME TO OUR TRESSY🛍️👗</h1>
              <p>Discover The Latest Trends And Styles With Us!</p>
              <p>Find Trendy, Classy And Comfy Styles All In One Place.🤩💃🛒</p>
              <p>Shop Your Favorites, AnyTime, AnyWhere With Just a Tap💗🌸👜</p>
            <h2>YOUR PERFECT DRESS IS WAITING - START YOUR STYLISH JOURNEY NOW!👚👠👒</ h2>
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