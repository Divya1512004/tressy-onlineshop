import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
import './PayDetails.css'
function PayDetails() {
  const { 
    selectedProduct, 
    checkoutItems, 
    orders, 
    setOrders, 
    totalPrice, 
    setCart, 
    setCartCount, 
    setSelectedProduct, 
    setCheckoutItems,
    deliveryInfo
  } = useContext(AppContext);

  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("");

  const placeFinalOrder = () => {

    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }

    let itemsToOrder = [];

    if (selectedProduct) {
      // itemsToOrder = [{ ...selectedProduct, quantity: 1 }];
      itemsToOrder = [{...selectedProduct}];
    } else if(checkoutItems.length > 0) {
      itemsToOrder = checkoutItems;
    }

    const newOrder = {
      id: Date.now(),
      items: itemsToOrder,
      userInfo: deliveryInfo,
      payment: paymentMethod,
      total: selectedProduct ? selectedProduct.price : totalPrice,
      date: new Date().toLocaleString(),
    };

    // Save order
    setOrders([...orders, newOrder]);

    // Clear all data
    // if(checkoutItems.length > 0){
    //   setCart([]);
    //   setCartCount(0);
    // }
    setSelectedProduct(null);
    setCheckoutItems([]);

    alert("Order Placed Successfully!");
    navigate("/Orders");
  };

  return (
    <div className="paydetails">
      <h1>Payment Details</h1>

      <h3>Delivery Address:</h3>
      <p>{deliveryInfo.name}, {deliveryInfo.phone}</p>
      <p>{deliveryInfo.houseNo}, {deliveryInfo.address}</p>
      <p>{deliveryInfo.city}, {deliveryInfo.state} - {deliveryInfo.pincode}</p>
      <p>Landmark: {deliveryInfo.landMark}</p>

      <h2>Select Payment Method</h2>

      {/* CASH ON DELIVERY */}
      <label className="payment-option">
        <input 
          type="radio" 
          name="payment" 
          value="Cash On Delivery"
          onChange={(e) => setPaymentMethod(e.target.value)} 
        />
        Cash on Delivery (COD)
      </label>

      {/* PAY ONLINE */}
      <label className="payment-option">
        <input 
          type="radio" 
          name="payment" 
          value="Online Payment"
          onChange={(e) => setPaymentMethod(e.target.value)} 
        />
        Pay Online (UPI / Card / NetBanking)
      </label>

      {/* PLACE ORDER BUTTON */}
      <button onClick={placeFinalOrder}>Place Order</button>
    </div>
  );
}

export default PayDetails;
