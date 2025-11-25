import React from 'react'
import './App.css'
import Header from './Component/Header.jsx'
import Home from './Component/Home.jsx'
import Men from './Component/Men.jsx'
import Shirt from './Component/Shirt.jsx'
import Tshirt from './Component/Tshirt.jsx'
import Pant from './Component/Pant.jsx'
import Short from './Component/Short.jsx'
import Women from './Component/Women.jsx'
import WomenShirt from './Component/WomenShirt.jsx'
import WomenPant from './Component/WomenPant.jsx'
import WomenTop from './Component/WomenTop.jsx'
import WomenDress from './Component/WomenDress.jsx'
import WomenSection from './Component/WomenSection.jsx'
import Kids from './Component/Kids.jsx'
import Girl from './Component/Girl.jsx'
import Boy from './Component/Boy.jsx'
import KidsFootWare from './Component/KidsFootWare.jsx'
import Accessories from './Component/Accessories.jsx' 
import Handbag from './Component/Handbag.jsx'
import Sockes from './Component/Sockes.jsx'
import Footware from './Component/Footware.jsx'
import Profile from './Component/Profile.jsx'
import LogIn from './Component/LogIn.jsx'
import Section from './Component/Section.jsx'
import NewArrivals from './Component/NewArrivals.jsx'
import Perfumes from './Component/Perfumes.jsx'
import Shoes from './Component/Shoes.jsx'
import Watch from './Component/Watch.jsx'
import Blazer from './Component/Blazer.jsx'
import Cart from './Component/Cart.jsx'
import Buy from './Component/Buy.jsx'
import Slide from './Component/Slide.jsx'
import {Routes,Route,useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import {AppContext} from './Context/AppContext.jsx'
import ProductDetail from './Component/ProductDetail.jsx'
import MakeUp from './Component/Makeup.jsx'
import Cards from './Component/Cards'
import Like from './Component/Like'
import Orders from './Component/Orders.jsx'
import PayDetails from './Component/PayDetails.jsx'
import Footer from './Component/Footer.jsx'
import PrivateRouter from './Component/PrivateRouter.jsx'
function App() {
  const [cart,setCart]=useState([]);
  const [cartCount,setCartCount]=useState(0);
  const [selectedSize,setSelectedSize]=useState(null);
  const [loggedIn,setLoggedIn]=useState(false);
  const [orders,setOrders]=useState([]);
  const [showLogin,setShowLogin]=useState(false);
  const [selectedProduct,setSelectedProduct]=useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [deliveryInfo, setDeliveryInfo] = useState({});
  const [search,setSearch]=useState("");
  const [allProducts,setAllProducts]=useState([]);

  const login =() => setLoggedIn(true);
  const logout =() => setLoggedIn(false);

  const openProfile = () => setShowProfile(true);
  const closeProfile = () => setShowProfile(false);

const openLogin= ()=> {
  setShowLogin(true);
  setShowProfile(false);
};
const closeLogin= () => setShowLogin(false);
 
  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    alert("Logged out successfully!");
    setLoggedIn(false);
  };

  const navigate=useNavigate();
  const addToCart=(product)=>{
    if(product.sizes && product.sizes.length > 0 && !selectedSize){
      alert("Please select a size before adding to cart!");
      return;
    }
    const price=Number(product.price || 0);
    const quantity=Number(product.quantity || 1)
    const newItem = {...product,price,quantity};
    setCart([...cart,newItem]);
    setCartCount(cartCount+1);
  };

    const increment = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrement = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };
    
  const deleteCart=(id)=>{
    setCart(cart.filter((item)=>item.id !== id));
    setCartCount(cartCount-1);
  }
  const [likedProducts, setLikedProducts] = useState([]);

  const addToLike = (product) => {
    setLikedProducts((prev) => {
      if (prev.find((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromLike = (id) => {
    setLikedProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const moveToOrder=()=>{
    if(selectedProduct){
      setOrders([...orders,selectedProduct])
      setCart(cart.filter((item)=> item.id !== selectedProduct.id))
      setCartCount(0);
    }
    navigate("/Orders")
  }


const buyAllProducts = () => {
  if (!loggedIn) {
    openProfile();  
    return;
  }

  if (cart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  setCheckoutItems(cart);
  setSelectedProduct(null);
  navigate("/Buy");
};



  const buy=(item)=>{
    setSelectedProduct(item);
    setCheckoutItems([]); 
    navigate("/Buy");
  }

  const totalPrice = cart.reduce((total,item)=>total + item.price * item.quantity,0);

  useEffect(() => {
  async function fetchAll() {
    const urls = [
      "https://jsondatabase-1.onrender.com/shirts",
      "https://jsondatabase-1.onrender.com/men",
      "https://jsondatabase-1.onrender.com/pants",
      "https://jsondatabase-1.onrender.com/tshirts",
      "https://jsondatabase-1.onrender.com/shorts",
      "https://jsondatabase-1.onrender.com/women",
      "https://jsondatabase-1.onrender.com/womenshirt",
      "https://jsondatabase-1.onrender.com/womenpant",
      "https://jsondatabase-1.onrender.com/top",
      "https://jsondatabase-1.onrender.com/dress",
      "https://jsondatabase-1.onrender.com/kids",
      "https://jsondatabase-1.onrender.com/girls",
      "https://jsondatabase-1.onrender.com/boys",
      "https://jsondatabase-1.onrender.com/kidsfoot",
      "https://jsondatabase-1.onrender.com/newarrivals",
      "https://jsondatabase-1.onrender.com/shoes",
      "https://jsondatabase-1.onrender.com/watches",
      "https://jsondatabase-1.onrender.com/blazers",
      "https://jsondatabase-1.onrender.com/section",
      "https://jsondatabase-1.onrender.com/handbags",
      "https://jsondatabase-1.onrender.com/footwears",
      "https://jsondatabase-1.onrender.com/sockes",
      "https://jsondatabase-1.onrender.com/makeup",
      "https://jsondatabase-1.onrender.com/perfume"
    ]
    const requets=urls.map(url => fetch(url).then(r => r.json()));
    const data=await Promise.all(requets)
    setAllProducts(data.flat());
  }
  fetchAll();
}, []);

  const  filterProducts=allProducts.filter((item)=>
    item?.name?.toLowerCase().includes(search.toLowerCase()) ||
    item?.category?.toLowerCase().includes(search.toLowerCase())
  )
  
  return (
    <AppContext.Provider
     value={{
      login,
      logout,
      cart,
      setCart,
      cartCount,
      setCartCount,
      addToCart,
      deleteCart,
      increment,
      decrement,
      totalPrice,
      selectedSize,
      setSelectedSize,
      likedProducts,
      addToLike,
      removeFromLike,
      loggedIn,
      setLoggedIn,
      handleLogout,
      orders,
      setOrders,
      selectedProduct,
      setSelectedProduct,
      moveToOrder,
      openProfile,
      closeProfile,
      showProfile,
      openLogin,
      closeLogin,
      showLogin,
      setShowLogin,
      buy,
      buyAllProducts,
      checkoutItems,
      setCheckoutItems,
      deliveryInfo,
      setDeliveryInfo,
      search,
      setSearch,
      allProducts,
      setAllProducts,
      filterProducts,
     }}>
    <div className='container'>
      <Slide/>
      <Header/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/Cards' element={<Cards/>}/>
        <Route path="/ProductDetail/:category/:id" element={<ProductDetail/>}/>
        <Route path="/Like" element={<Like/>}/>
        <Route path="/Section" element={<Section/>}/>
        <Route path="/Men" element={<Men/>}/>
        <Route path="/Shirt" element={<Shirt/>}/>
        <Route path="/Pant" element={<Pant/>}/>
        <Route path="/Tshirt" element={<Tshirt/>}/>
        <Route path='/Short' element={<Short/>}/>
        <Route path="/Women" element={<Women/>}/>
        <Route path="/WomenShirt" element={<WomenShirt/>}/>
        <Route path="/WomenPant" element={<WomenPant/>}/>
        <Route path="/WomenTop" element={<WomenTop/>}/>
        <Route path="/WomenDress" element={<WomenDress/>}/>
        <Route path="/WomenSection" element={<WomenSection/>}/>
        <Route path="/Kids" element={<Kids/>}/>
        <Route path="/Girl" element={<Girl/>}/>
        <Route path="Boy" element={<Boy/>}/>
        <Route path="/KidsFootWare" element={<KidsFootWare/>}/>
        <Route path="/Accessories" element={<Accessories/>}/>
        <Route path="/MakeUp" element={<MakeUp/>}/>
        <Route path="/Handbag" element={<Handbag/>}/>
        <Route path="/Sockes" element={<Sockes/>}/>
        <Route path="/Footware" element={<Footware/>}/>
        <Route path="/NewArrivals" element={<NewArrivals/>}/>
        <Route path="/Perfumes" element={<Perfumes/>}/>
        <Route path="/Shoes" element={<Shoes/>}/>
        <Route path="/Watch" element={<Watch/>}/>
        <Route path="/Blazer" element={<Blazer/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Buy" element={<PrivateRouter><Buy/></PrivateRouter>}/>
        <Route path="/PayDetails" element={<PrivateRouter><PayDetails/></PrivateRouter>}/>
        <Route path="/Orders" element={<Orders/>}/>
      </Routes>
      <Footer/>
      {showProfile && <Profile/>}
      {showLogin && <LogIn/>}
    </div>
    </AppContext.Provider>
  )
  }

export default App