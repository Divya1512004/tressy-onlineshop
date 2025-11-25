import { useContext,useEffect } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
import './Like.css'
function Like() {
  const { likedProducts, removeFromLike } = useContext(AppContext);
  const navigate=useNavigate();

  return (
    <div>
      <h2>Your Liked Items ❤️</h2>
      
      {likedProducts.length === 0 && <p>No liked products yet.</p>}

      <div className="fav-container">
        {likedProducts.map((item) => (
          <div key={item.id} className="fav-card">
            <img src={item.img} onClick={() => navigate(`/ProductDetail/${item.category}/${item.id}`)}/>
            <h4>{item.name}</h4>
            <p>Price: ₹{item.price}</p>

            <button onClick={() => removeFromLike(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Like;
