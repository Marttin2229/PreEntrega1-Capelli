// src/App.js
import React from 'react';
import Navbar from './components/NavBar';
import Title from './Title';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <div className="navbar-container">
        <Navbar /> 
      </div>
      <ItemsListContainer greeting={'Bienvenidos'}/> 
    </div>
  );
}

export default App;