import React from 'react';
import Irctc from "../../assets/Images/Irctc_logo.png"
import IrctcRight from "../../assets/Images/Irctc_logo_2.png"
import './navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img
          src={Irctc}
          alt="IRCTC"
          className="logo"
        />
      </div>

      <div className="nav-center">
        <Link to="/login">LOGIN /REGISTER</Link>
        <a href="#" className="active">TRAINS</a>
        <a href="#">E-WALLET</a>
        <a href="#">ALERTS</a>
        <a href="#">BUSES</a>
        <a href="#">FLIGHTS</a>
        <a href="#">HOTELS</a>
        <a href="#">HOLIDAYS</a>
        <a href="#">MEALS</a>
        <a href="#">PROMOTIONS</a>
        <a href="#">MORE</a>
        <a href="#">CONTACT US</a>
      </div>

      <div className="nav-right">
        
        <img src="{IrctcRight}" alt="IRCTC" className="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
