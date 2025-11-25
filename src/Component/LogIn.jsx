import React, { use, useEffect, useState,useContext } from 'react'
import axios from 'axios';
import './Login.css'
import { AppContext } from '../Context/AppContext';
import { useNavigate,Navigate,Link } from 'react-router-dom';
import bcrypt from 'bcryptjs';
function LogIn() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [user,setUser]=useState("")
    const [msg,setMsg]=useState("");
    const [err,setErr]=useState("");
    const navigate=useNavigate()
      const {loggedIn,setLoggedIn,handleLogout,closeLogin,openProfile}=useContext(AppContext)
    const url="https://jsondatabase-1.onrender.com/user";


    const login=()=>{
        if(!email || !password){
            setMsg("");
            setErr("Enter Both Fields");
            return;
        }
        axios.get(url)
        .then((res)=>{
            const users=Array.isArray(res.data) ? res.data : res.data.users || [];
            const user=users.find(use => use.email === email);
            if(!user){
                setMsg("Invalid User Name");
                return;
            }
        bcrypt.compare(password,user.hashedpassword || user.password,(err,isMatch)=>{
            if(err){
                setMsg("something went wrong");
                return;
            }
            if (isMatch) {
                alert("Login successfully");
                setErr('')
                localStorage.setItem("userEmail", email);
                setLoggedIn(true);
                // navigate("/Buy")
            } else {
                console.log("Password is not matched");
                setErr("Incorrect password")
                // setMsg("Invalid password");
            }
            })
        })
    }
  return (
    <div className='login-overlay'>
      
      <div className='login-model'>
        {loggedIn ? (
      <>
          <div className="close-login" onClick={closeLogin}>X</div>
          <h1>Welcome, {localStorage.getItem("userEmail")}</h1>
          <button onClick={handleLogout}>Logout</button>
      </>
      ) : (
        <>  
      <div className='close-login' onClick={closeLogin}>
        X
      </div>
            <h1>LogIn</h1>
            <div className='box1'>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
           </div> 
           <div className='box2'>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
            </div>
            <button onClick={()=>{login({id:`${+new Date()}`,email:email,password:password})}}>LogIn</button>
            {msg && <p className="msg">{msg}</p>}
            {err && <p className="error">{err}</p>}
            </>
      )}
      </div>
    </div>
  )
}

export default LogIn






