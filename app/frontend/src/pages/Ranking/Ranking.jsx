import React, {useState} from 'react'
import Joke from '../../components/Joke/Joke';
import './Ranking.css';
import NavBar from '../../components/NavBar/NavBar';
import { jokesMock } from '../../data/jokes.js';
function Ranking() {
  const [jokes] = useState(jokesMock);
  const sortedJokes = [...jokes].sort((a, b) => (b.likes - b.dislikes) - (a.likes - a.dislikes));
  return (
    <div>
      <NavBar fromRanking={true}/>
      <div className='jokes-container'>
        <div className='ranking-header'>
          <h1>Los mejores chistes:</h1>
        </div>
        {
          sortedJokes.map((joke, index) => {
            console.log(joke)
            return (
              <div key={joke.id} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="ranking-number" style={{ fontWeight: 'bold', fontSize: '2.2rem' }}>{index + 1}.</span>
                <Joke text={joke.text} likes={joke.likes} dislikes={joke.dislikes} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Ranking