 import React, { useContext } from 'react'
 import './Cards.css'
import { useState,useEffect } from 'react'
import {AppContext} from '../Context/AppContext.jsx'
import {useNavigate,Link} from 'react-router-dom'
function Cards({ Cards, category }) {
  const { addToLike } = useContext(AppContext);
  const navigate = useNavigate();

  const handleImageClick = (item) => {
    navigate(`/ProductDetail/${category}/${item.id}`);
  };

  return (
    <div className='card'>
      {Cards.map((tot) => (
        <div key={tot.id}>
          <div className="image-container">
            <img 
              src={tot.img} 
              onClick={() => handleImageClick({ ...tot, category })}
            />
            <div className="wishlist">
              <i
                className="fa-regular fa-heart heart-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  addToLike({ ...tot, category });
                }}
              ></i>
            </div>
          </div>
          <h4>{tot.name}</h4>
          <p>Price: {tot.price}</p>
        </div>
      ))}
    </div>
  );
}
export default Cards