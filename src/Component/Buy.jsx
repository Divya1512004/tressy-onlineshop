import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import './Buy.css'
import { useNavigate } from 'react-router-dom';

function Buy() {

  const { 
    selectedProduct, 
    checkoutItems, 
    setDeliveryInfo 
  } = useContext(AppContext);

  const navigate = useNavigate();
 
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [landMark, setLandMark] = useState("");
  const [err, setErr] = useState("");

  const handleContinue = () => {
    if (!name || !phone || !houseNo || !address || !pincode || !city || !state || !landMark) {
      setErr("All fields are mandatory!");
      return;
    }

    setErr("");

    setDeliveryInfo({
      name, phone, houseNo, address, pincode, city, state, landMark
    });

    navigate("/PayDetails"); 
  };

  return (
    <div className="buy">
      <h1>Delivery Details🚚💨</h1>
    
      {selectedProduct && (
        <div className="buy-product">
          <h3>Buying This Product🛍️🛒</h3>
          <img src={selectedProduct.img} width="120" />
          <h3>{selectedProduct.name}</h3>
          <h4>₹{selectedProduct.price}</h4>
          </div>
        
      )}
      {checkoutItems.length > 0 && (
        <div>
          <h3>Buying All Cart Products🛍️🛒</h3>
          {checkoutItems.map((item) => (
            <div key={item.id} className="buy-product">
              <img src={item.img} width="120" />
              <h3>{item.name}</h3>
              <p>Qty: {item.quantity}</p>
              <p>₹{item.price}</p>
            </div>
          ))}
        </div>
      )}

      <div className="buy-details">
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input placeholder="House No,Street" value={houseNo} onChange={(e) => setHouseNo(e.target.value)} />
        <input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <input placeholder="Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} />
        <input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
        <input placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
        <input placeholder="Landmark" value={landMark} onChange={(e) => setLandMark(e.target.value)} />

        <button onClick={handleContinue}>Continue</button>

        {err && <p style={{ color: "red" }}>{err}</p>}
      </div>
    </div>
  );
}

export default Buy;
