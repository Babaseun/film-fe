import { useCallback, useMemo, useState } from 'react';
import { FilmContextData } from '../context/FilmListContext';
import { getFilmsFromAPI } from '../api';

export default function useFilmsContextValue(): FilmContextData {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFilms = useCallback(async () => {
    const res = await getFilmsFromAPI();
    setFilms(res.data?.results);
    setIsLoading(false);
  }, [setFilms]);

  return useMemo(
    () => ({
      films,
      isLoading,
      fetchFilms,
      setFilms,
    }),
    [films, isLoading, fetchFilms, setFilms],
  );
}
