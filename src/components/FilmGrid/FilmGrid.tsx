import React, { useContext, useEffect } from 'react';
import { FilmListContext } from '../../context/FilmListContext';
import Film from '../Film/Film';
import Spinner from '../Spinner/Spinner';
import './FilmGrid.scss';

function FilmGrid() {
  const { fetchFilms, films, isLoading } = useContext(FilmListContext);
  useEffect(() => {
    fetchFilms();
  }, [fetchFilms]);
  return (
    <div data-testid="film-grid-test-id">
      <h1>Films Resource</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="film-grid-container">
          {films.map((film) => (
            <Film key={film.episode_id} {...film} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FilmGrid;
