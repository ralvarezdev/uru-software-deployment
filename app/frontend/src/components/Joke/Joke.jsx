
import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import './Joke.css';

function Joke({ text, likes, dislikes }) {
  const showStats = typeof likes === 'number' || typeof dislikes === 'number';

  // Solo para la vista de acciones (no ranking)
  const [selected, setSelected] = useState(null); // 'like', 'dislike', o null

  const handleLike = () => {
    if (selected === 'like') {
      setSelected(null); // desmarcar
    } else {
      setSelected('like');
    }
  };

  const handleDislike = () => {
    if (selected === 'dislike') {
      setSelected(null); // desmarcar
    } else {
      setSelected('dislike');
    }
  };

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
          <FaThumbsUp
            className={`joke-icon like${selected === 'like' ? ' active' : ''}`}
            title="Me gusta"
            onClick={handleLike}
          />
          <FaThumbsDown
            className={`joke-icon dislike${selected === 'dislike' ? ' active' : ''}`}
            title="No me gusta"
            onClick={handleDislike}
          />
        </div>
      )}
    </div>
  );
}

export default Joke;
