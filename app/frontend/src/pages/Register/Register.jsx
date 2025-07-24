import React from 'react';
import { NavLink } from 'react-router';
import './Register.css';

function Register() {
  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="register-title">🎉 ¡Únete a Desplegando Risas! 😂</h1>

        <div className="register-card">
          <h2 className="register-subtitle">Crea tu cuenta y empieza a reír</h2>

          <form className="register-form">
            <input
              type="text"
              placeholder="Nombre de usuario"
              className="register-input"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="register-input"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="register-input"
            />
            <input
              type="password"
              placeholder="Confirmar contraseña"
              className="register-input"
            />

            <button type="submit" className="register-button">
              ¡Registrarme! 🎈
            </button>
          </form>

          <div className="register-footer">
            ¿Ya tienes cuenta?{' '}
            <NavLink to="/login" className="register-link">Inicia sesión aquí</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
