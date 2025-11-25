import './Cart.css'
import React, { useContext,useState } from 'react'
import { AppContext } from '../Context/AppContext'

function Cart() {
  const {deleteCart,cart,totalPrice,increment,decrement,buyAllProducts}=useContext(AppContext)

  return(
    <div className='cart'>
      <div className="cart-part">
        <h2>My Cart</h2>

        {cart.length === 0 ? (
          <p>My cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img}/>
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>

              <div className="quantity">
                <button onClick={() => decrement(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increment(item.id)}>+</button>
              </div>

              <p>SubTotal: ₹{item.price * item.quantity}</p>

              <button onClick={() => deleteCart(item.id)}>Remove</button>
            </div>
          ))
        )}

        <h3>Total Price: ₹{totalPrice}</h3>

        {cart.length > 0 && (
        <button onClick={buyAllProducts} 
          style={{ padding: "10px", background: "black", color: "white", marginTop: "20px" }}>Buy All Products</button>
      )}
      </div>
    </div>
  )
}

export default Cart

