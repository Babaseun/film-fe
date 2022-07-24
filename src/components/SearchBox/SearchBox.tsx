import React, { useContext } from 'react';
import { FilmListContext } from '../../context/FilmListContext';
import './SearchBox.scss';

function SearchBox() {
  const { films, setFilms, fetchFilms } = useContext(FilmListContext);

  const getFilm = (e: { target: { value: string } }) => {
    const { value } = e.target;
    const results = films.filter(({ title }) =>
      title.toLowerCase().startsWith(value.toLowerCase()),
    );

    if (films.length === 0) {
      fetchFilms();
      // eslint-disable-next-line no-alert
      alert('No results found');
      return;
    }
    setFilms(results);
  };
  return (
    <div className="search-box-container">
      <div className="search">
        <input
          type="search"
          name="search"
          className="input"
          placeholder="Search for films.."
          onKeyUp={getFilm}
        />
      </div>
    </div>
  );
}

export default SearchBox;
