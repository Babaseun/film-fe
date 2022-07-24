import React from 'react';
import './Body.scss';

interface BodyProps {
  filmGrid: React.ElementType;
  searchBox: React.ElementType;
}

function Body(props: BodyProps) {
  const { filmGrid: FilmGrid, searchBox: SearchBox } = props;
  return (
    <div className="body-container">
      <SearchBox />
      <FilmGrid />
    </div>
  );
}

export default Body;
