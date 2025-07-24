import React from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <h1 className="navbar-title">🏠 Bienvenido a Desplegando Risas!</h1>
      <div className="navbar-buttons">
        <button onClick={() => navigate('/ranking')}>Ranking general de chistes</button>
        <button onClick={() => navigate('/generar')}>Generar otros chistes</button>
        <button onClick={() => navigate('/logout')}>Cerrar sesión</button>
      </div>
    </div>
  );
};

export default NavBar;
