import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss"
function Navbar(){
  const [open,setOpen]=useState(false);
  function changeHandler(){
    setOpen(!open);
  }

  const user=true;

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" ></img>
          <span>UrbanNest</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
      {user ? (
        <div className="user">
          <img
          src=""
          alt="user"
          />
          <span>Aditya</span>
          <Link to="/profile" className="profile">
          <div className="notification">3</div>
          <span>Profile</span>
          </Link>
        </div>
        ):(
          <>
          <a href="/">Sign In</a>
          <a href="/" className="register">Sign Up</a>
          </>
        )}
      
      <div className="menuIcon">
        <img src="/menu.png" 
        alt="" 
        onClick={changeHandler}/>
      </div>
      <div className={open ? "menu active" : "menu"}>
      <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
        <a href="/">Sign In</a>
        <a href="/">Sign Up</a>
        
      </div>
      </div>
    </nav>
  )
}
export default Navbar;