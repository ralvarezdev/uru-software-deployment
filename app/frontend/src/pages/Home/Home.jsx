import React from 'react'
import { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Joke from '../../components/Joke/Joke'
import './Home.css'
function Home() {
  const [jokes, setJokes] = useState([
    "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
    "¿Qué hace una abeja en el gimnasio? Zum-ba.",
    "¿Por qué los esqueletos no pelean entre ellos? Porque no tienen agallas."
  ]);

  return (
    <div>
      <NavBar />
      <div className='jokes-container'>
        <div className='welcome-message'>
          <h1>Los chistes de hoy:</h1>
        </div>
        {
          /* Aquí podrías agregar más lógica para mostrar chistes dinámicamente */
          jokes.map((joke, index) => <Joke key={index} text={joke} />)
        }
      </div>
    </div>
  )
}

export default Home