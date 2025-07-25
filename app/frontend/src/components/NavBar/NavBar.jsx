import React from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router';

const NavBar = ({ onGenerateJokes, fromRanking, canSeeRanking }) => {
  const navigate = useNavigate();
  console.log("fromRanking", fromRanking);
  console.log("canSeeRanking", canSeeRanking);
  const showRankingButton = canSeeRanking && !fromRanking;
  console.log("showRankingButton", showRankingButton);
  return (
    <div className="navbar-container">
      <h1 className="navbar-title">🏠 Bienvenido a Desplegando Risas!</h1>
      <div className="navbar-buttons">
        {showRankingButton ? (
          <button onClick={() => navigate('/ranking')}>Ver ranking de chistes</button>
        ) : null}
        {fromRanking ? <button onClick={() => navigate('/home')}>Volver a la página principal</button> : (
          <>
            <button onClick={onGenerateJokes}>Generar otros chistes</button>
          </>
        )}
        <button onClick={() => navigate('/login')}>Cerrar sesión</button>
        <button onClick={() => window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0", "_blank")}>
          Risa incontrolable!
        </button>
      </div>
    </div>
  );
};

export default NavBar;
