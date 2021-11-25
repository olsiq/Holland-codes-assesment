import React, { useState } from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [showNavigation, setNavigation] = useState(true);

  return (
    <div className='nav'>
      <div className='menu-btn-container'>
        <button
          aria-label='menu buttom'
          className='menu-btn'
          onClick={() => setNavigation(!showNavigation)}
        >
          {showNavigation ? <MenuIcon /> : <CloseIcon />}
        </button>
      </div>
      <div className='navigation' id={showNavigation ? "hide" : ""}>
        <Link
          to='/'
          className='link-nav'
          style={{ textDecoration: "none" }}
          onClick={() => setNavigation(!showNavigation)}
        >
          Home
        </Link>
        <Link
          to='/assesment'
          className='link-nav'
          style={{ textDecoration: "none" }}
          onClick={() => setNavigation(!showNavigation)}
        >
          Assessment
        </Link>
        <Link
          to='/about'
          className='link-nav'
          style={{ textDecoration: "none" }}
          onClick={() => setNavigation(!showNavigation)}
        >
          Dr. John Holland
        </Link>
      </div>
    </div>
  );
}

export default Header;
