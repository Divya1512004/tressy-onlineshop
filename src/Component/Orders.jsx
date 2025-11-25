import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import './Orders.css';
import { Navigate } from 'react-router-dom';

function Orders() {
  const { orders } = useContext(AppContext);

  return (
    <div className="orders">
      <div className="order-head">
        <h1>My Orders 🛍️🛒</h1>
      </div>

      {orders.length === 0 ? (
        <h4>No Order Has Been Placed!</h4>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="order-box">
            <h3>Order Date: {order.date}</h3>
            <h3>Total: ₹{order.total}</h3>

            {order.items.map((product) => (
              <div key={product.id} className="order-item">
                <img src={product.img} alt={product.name} />

                <div>
                  <h3>{product.name}</h3>
                  <p>Price: ₹{product.price}</p>
                  <p>Qty: {product.quantity}</p>
                </div>
              </div>
            ))}
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
