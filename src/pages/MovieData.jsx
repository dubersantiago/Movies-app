import React from 'react'
import './MovieData.css';

export const MovieData = ({movie}) => {
    
  const {title,overview,poster_path}=movie;

  return (
    <div className='card'>
        <div className='content'>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
            <h1>{title}</h1>
            <p>{overview}</p>
        </div>
        <div className='footer'>
            <button>Ver mas</button>
        </div>
    </div>
  )
}
