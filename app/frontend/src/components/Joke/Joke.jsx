import React from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import './Joke.css';

function Joke({ text, likes, dislikes }) {
  const showStats = typeof likes === 'number' || typeof dislikes === 'number';
  return (
    <div className="joke-card">
      <p>{text}</p>
      {showStats ? (
        <div className="joke-stats">
          <span className="likes">{likes} Me gusta</span>
          <span className="dislikes">{dislikes} No me gusta</span>
        </div>
      ) : (
        <div className="joke-actions">
          <FaThumbsUp className="joke-icon like" title="Me gusta" />
          <FaThumbsDown className="joke-icon dislike" title="No me gusta" />
        </div>
      )}
    </div>
  );
}

export default Joke;
