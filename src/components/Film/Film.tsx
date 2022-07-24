import React from 'react';
import './Film.scss';
import { Link } from 'react-router-dom';

interface FilmProps {
  title: string;
  director: string;
  producer: string;
  release_date: string;
  episode_id: string;
}
function Film(props: FilmProps) {
  const {
    title,
    producer,
    release_date: releaseDate,
    director,
    episode_id: id,
  } = props;
  return (
    <div className="film-container">
      <div>
        <h2 className="film-title">{title}</h2>
        <p>
          <small>Produced by: </small>
          {producer}
        </p>
        <p>
          <small>Directed by: </small>
          {director}
        </p>
        <p>{releaseDate}</p>
        <Link to={`/films/${id}`}> See Details</Link>
      </div>
    </div>
  );
}

export default Film;
