import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss"
import { AuthContext } from "../../context/AuthContext";
function Navbar(){
  const [open,setOpen]=useState(false);

  const {currentUser} = useContext(AuthContext)


  function changeHandler(){
    setOpen(!open);
  }

  

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" ></img>
          <span>UrbanNest</span>
        </a>
        <a href="/">Home</a>
      </div>
      <div className="right">
      {currentUser ? (
        <div className="user">
          <img
          src={currentUser.avatar || "/noavatar.jpg"}
          alt="user"
          />
          <span>{currentUser.username}</span>
          <Link to="/profile" className="profile">
          <div className="notification">3</div>
          <span>Profile</span>
          </Link>
        </div>
        ):(
          <>
          <a href="/login">Sign In</a>
          <a href="/register" className="register">Sign Up</a>
          </>
        )}
      
      <div className="menuIcon">
        <img src="/menu.png" 
        alt="" 
        onClick={changeHandler}/>
      </div>
      <div className={open ? "menu active" : "menu"}>
      <a href="/">Home</a>
        
        <a href="/">Sign In</a>
        <a href="/">Sign Up</a>
        
      </div>
      </div>
    </nav>
  )
}
export default Navbar;