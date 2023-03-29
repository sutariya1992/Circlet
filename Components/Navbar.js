import React from 'react';
import Logo from "../Assets/logoimage.svg";
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        <h1 className='mainLogo'>Logo</h1>
        <img src={Logo} />

      </div>
      <div className='rightSide'>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar