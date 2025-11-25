import React, { useContext,useState } from 'react'
import './Header.css'
import { Link,useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
function Header() {
    const {cartCount,openProfile,setSearch,search,filterProducts }=useContext(AppContext);
    const [showDropdown,setShowDropdown]=useState(false);
    const navigate=useNavigate();

    const handleSelect = (item) => {
        navigate(`/ProductDetail/${item.category}/${item.id}`);
        setShowDropdown(false);
        setSearch("");
    }
  return (
    <div className='header'>
        <div className="head-contents">
        <div className="logo">
            <img src="/photos/logo1.jpg" width="100"/>
        </div>
            <div className="navlinks">
                {/* <i className="fa-solid fa-bars"></i> */}
                <Link to="/">Home</Link>
                <Link to="/Men">Men</Link>
                <Link to="/Women">Women</Link>
                <Link to="/Kids">Kids</Link>
                <Link to="/Accessories">Accessories</Link>
                <Link to="/Orders">Orders</Link>
            </div>
            <div className="search">
                <input type="text" placeholder='What you looking for?'
                 onChange={(e) =>{setSearch(e.target.value); setShowDropdown(e.target.value.length > 0)}}/>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            {showDropdown && (
                <div className="dropdown">
                    {filterProducts.length > 0 ? (
                        filterProducts.slice(0,10).map((item) => (
                            <div className="dropdown-item"
                            key={item.id}>
                                <img src={item.img}onClick={()=> handleSelect(item)} className="dropdown-img"/>
                                <span>{item.name}</span>
                            </div>
                        ))
                     ) : (
                        <p className="no-results">No results found</p>
                        )
                    }
                </div>
            )}
            <div className="navbar">
                <div className="user" onClick={openProfile}> 
                       <i className="fa-solid fa-user"></i>
                </div>
                <div className="wish">
                    <Link to="/Like"><i className="fa-regular fa-heart"></i></Link>
                </div>
                <div className="items">
                    <Link to="/Cart">
                        <i className="fa-solid fa-cart-shopping"></i>
                        {cartCount}
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header