import React from 'react'
import { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Joke from '../../components/Joke/Joke'
import './Home.css'
import { jokesMock } from '../../data/jokes.js'
function Home() {
  const [jokes] = useState(jokesMock);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(3);
  const [canSeeRanking, setCanSeeRanking] = useState(false);

  const getMoreJokes = () =>{
    if(max >= jokes.length) {
      setCanSeeRanking(true);
      alert("No hay más chistes para mostrar");
      return;
    }

    setMin(min + 3);
    setMax(max + 3);
  }

  return (
    <div>
      <NavBar onGenerateJokes={getMoreJokes} canSeeRanking={canSeeRanking} fromRanking={false} />
      <div className='jokes-container'>
        <div className='welcome-message'>
          <h1>Los chistes de hoy:</h1>
        </div>
        {
          jokes.slice(min,max).map((joke) => {
            console.log(joke)
            return <Joke key={joke.id} text={joke.text} />
          })
        }
      </div>
    </div>
  )
}

export default Home