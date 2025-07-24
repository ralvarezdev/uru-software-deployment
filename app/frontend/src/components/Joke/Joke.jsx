import React from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import './Joke.css';

function Joke({ text }) {
  return (
    <div className="joke-card">
      <p>{text}</p>
      <div className="joke-actions">
        <FaThumbsUp className="joke-icon like" title="Me gusta" />
        <FaThumbsDown className="joke-icon dislike" title="No me gusta" />
      </div>
    </div>
  );
}

export default Joke;
