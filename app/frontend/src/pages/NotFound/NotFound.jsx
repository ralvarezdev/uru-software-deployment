import React from 'react';
import './NotFound.css';
import { NavLink } from 'react-router';

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <h1>😅 ¡Oops!</h1>
        <p>La página que buscas se fue a contar chistes...</p>
        <p>¿Por qué no vuelves a <NavLink to="/home">reír un rato?</NavLink></p>
      </div>
    </div>
  );
}

export default NotFound;