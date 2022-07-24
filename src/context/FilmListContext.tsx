import { createContext } from 'react';

export interface IFilmDetailAttributes {
  title: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  episode_id: string;
}
export interface FilmContextData {
  films: IFilmDetailAttributes[];
  isLoading: boolean;
  fetchFilms: () => void;
  setFilms: any;
}

export const filmContextDefaultValue: FilmContextData = {
  films: [],
  isLoading: false,
  fetchFilms: () => null,
  setFilms: () => null,
};

export const FilmListContext = createContext<FilmContextData>(
  filmContextDefaultValue,
);
