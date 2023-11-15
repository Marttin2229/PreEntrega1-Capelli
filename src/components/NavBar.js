// src/Navbar.js
import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidgets/CartWidgets';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"></div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/">INICIO</a>
        </li>
        <li className="navbar-item">
          <a href="/productos">PRODUCTOS</a>
        </li>
        <li className="navbar-item">
          <a href="/contacto">CONTACTO</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;