import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IFilmDetailAttributes } from '../../context/FilmListContext';
import './FilmDetail.scss';

function FilmDetail() {
  const [details, setDetails] = useState<IFilmDetailAttributes>({
    title: '',
    opening_crawl: '',
    director: '',
    producer: '',
    release_date: '',
    episode_id: '',
  });
  const { ID } = useParams();
  useEffect(() => {
    (async () => {
      const response = await axios.get(`/films/${ID}`);
      setDetails(response.data);
    })();
  }, [ID]);
  return (
    <div className="film-detail-container">
      <div className="film-detail-content">
        <p>
          <b>Title:</b> {details.title}
        </p>
        <p>
          <b>Opening Crawl:</b>
          {details.opening_crawl}
        </p>
        <p>
          <b>Director:</b>
          {details.director}
        </p>
        <p>
          <b>Producer:</b>
          {details.producer}
        </p>
        <p>
          <b>Release Date:</b>
          {details.release_date}
        </p>
      </div>
    </div>
  );
}

export default FilmDetail;
