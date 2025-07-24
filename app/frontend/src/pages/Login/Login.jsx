import React from 'react';
import { NavLink } from 'react-router';
import './Login.css'; // Assuming you have a CSS file for styling   

function Login() {
  return (
    <div className="login-container">
        <div className='login-box'>
        <h1 className="login-title">😂 ¡Bienvenido a Desplegando Risas! 😂</h1>
        <div className="login-card">
        <h2 className="login-subtitle">Inicia sesión para reír sin parar</h2>

        <form className="login-form">
          <input
            type="text"
            placeholder="Nombre de usuario"
            className="login-input"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="login-input"
          />

          <button type="submit" className="login-button">
            Ingresar 😄
          </button>
        </form>
        <div className="login-footer">
          ¿No tienes cuenta? <NavLink to="/register" className="login-link">Regístrate aquí</NavLink>
        </div>
      </div>
        </div>
       </div>
  );
}

export default Login;
