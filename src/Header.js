import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({isopen, setIsopen}) => {
  
  return (
    <nav className="navbar">
      <h1>My-Blog</h1>
      <div className="links">
        <span className="sphome" onClick={() => setIsopen(false)}>Home</span>
        {/* <Link to="/create"> New Blog</Link> */}
        <button onClick={() => setIsopen(true)} className="header-btn">New Blog</button>
      </div>
    </nav>
  );
};

export default Header;
