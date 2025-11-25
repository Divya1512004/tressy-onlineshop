import axios from 'axios';
import './Profile.css'
import React, { useContext, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import { AppContext } from '../Context/AppContext';
function Profile() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [password,setPassword]=useState("");
  const [user,setUser]=useState("");
  const [msg,setMsg]=useState("");
  const [err,setErr]=useState("");
  const navigate=useNavigate();
  const {loggedIn,setLoggedIn,handleLogout,openLogin,openProfile,closeProfile}=useContext(AppContext)
  const url="https://jsondatabase-1.onrender.com/user";

  const hashedpassword =bcrypt.hashSync(password,10)
  const addUser=(detail)=>{
    if(!name || !email || !phone || !password){
      setMsg("");
      setErr("All Fields Are Mandatory");
      return false;
    }
    axios.post(url,detail)
      .then((res)=>
      {
        setUser([...user,res.data])
        setErr(""),
        setMsg("Details Added Successfully");

        alert("Register successfully!")
        setLoggedIn(true);
      })
      .catch((err)=>{console.log(err)
        setMsg("");
        setErr(err.message)
      })
  }
  return (
    <div className='signup'>
        
    {
    loggedIn ? (
      <>
          {/* <div className='wel' onClick={closeProfile}>
           X
           <h1>Welcome</h1>
            <button onClick={handleLogout}>Logout</button>
          </div> */}
          <div className="wel">
          <span className="close-login" onClick={closeProfile}>X</span>

            <h1>Welcome</h1>
            <button onClick={handleLogout}>Logout</button>
          </div>
      </>
      ) : (
        <>
      <div className="profile-detail">
        <div className="close-profile" onClick={closeProfile}>X</div>
          <h1>Register</h1>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name'/>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
          <input type="phoneNo" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Phone'/>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
          <button onClick={()=>addUser({name:name,email:email,phone:phone,password:hashedpassword})}>Register</button>
          <p>Do You have an Account?
          <span className="login-link"onClick={() =>{ closeProfile(); openLogin();}}>Login</span></p>
          {err && <p className='error'>{err}</p>}
          {msg && <p className='success'>{msg}</p>}
      </div>
        </>
      )}
    </div>
  )
}

export default Profile