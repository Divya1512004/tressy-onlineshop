import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import axios from "axios";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  const { addToCart, selectedSize, setSelectedSize, loggedIn, buy, openProfile } =
    useContext(AppContext);

  const [qty, setQty] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const increment = () => setQty(qty + 1);
  const decrement = () => qty > 1 && setQty(qty - 1);

  useEffect(() => {
    axios
      .get("https://jsondatabase-1.onrender.com/db")
      .then((res) => {
        const data = res.data;

        const allProducts = Object.values(data)
          .filter((v) => Array.isArray(v))
          .flat();

        const found = allProducts.find((item) => item.id == id);

        setProduct(found);
        setSelectedSize("");
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const images = [
    product.img,
    product.bimg,
    product.bimg1,
    product.bimg2
  ].filter(Boolean);

  const handleImageClick = (index) => {
    setCurrentImgIndex(index);
    setShowModal(true);
  };

  const handleNext = () => {
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="product-detail">
      <div className="product-img">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            onClick={() => handleImageClick(index)}
            className="thumbnail"
          />
        ))}
      </div>

      <div className="product-detail-info">
        <h2>{product.name}</h2>
        <p className="price">₹ {product.price}</p>

        <div className="product-quantity">
          <button onClick={decrement}>-</button>
          <span style={{ margin: "0 10px" }}>{qty}</span>
          <button onClick={increment}>+</button>
        </div>

        {product.sizes && (
          <div className="size-container">
            <h4>Select Size</h4>
            <div className="size-list">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  className={`size-btn ${selectedSize === s ? "active" : ""}`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="add">
          <button
            onClick={() =>
              addToCart({ ...product, quantity: qty, size: selectedSize })
            }
          >
            Add To Cart
          </button>

          <button
            onClick={() => {
              if (!loggedIn) {
                alert("Please log in before making a purchase!");
                openProfile();
                return;
              }
              if (product.sizes && !selectedSize) {
                alert("Please select a size before buying!");
                return;
              }
              buy({ ...product, quantity: qty, size: selectedSize });
              // buy(product);
            }}
          >
            Buy
          </button>
        </div>

        <div className="product-description">
          <p>{product.description}</p>
        </div>
      </div>

      {showModal && (
        <div className="image-modal">
          <span className="close-btn" onClick={handleClose}>
            &times;
          </span>

          <button className="arrow left" onClick={handlePrev}>
            &#10094;
          </button>

          <img
            src={images[currentImgIndex]}
            alt="Large Preview"
            className="modal-img"
          />

          <button className="arrow right" onClick={handleNext}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;






