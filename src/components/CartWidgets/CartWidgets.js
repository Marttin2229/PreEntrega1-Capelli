// src/CartWidget.js
import React from 'react';
import cart from './assets/shopping-cart-outline-svgrepo-com.svg';

const cartWidgetStyle = {
    position: 'absolute',
    right: '100px',
    width: '150px',  // Ajusta este valor para cambiar el tamaño de la imagen
    cursor: 'pointer',
  };

  const CartWidget = () => {
    return (
      <div style={cartWidgetStyle}>
        <img src={cart} alt="cart-widget" style={{ width: '50px', height: 'auto' }} />
        0
      </div>
    );
  };

export default CartWidget;