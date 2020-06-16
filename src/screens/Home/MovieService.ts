import { useState, useEffect } from 'react';
import slugify from '@sindresorhus/slugify';
import httpService from '../../services/httpService';
import { API_URL } from '../../common/infrastructure/constants';
import { Movie } from  '../../types/movie.type';

const mapMovies = (data: Movie[]) => {
  return data.map(({ title, year }) => ({
    title,
    slug: slugify(`${title} ${year}`),
  }));
};

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    httpService.get(API_URL).then(({ data }) => {
      setMovies(mapMovies(data));
    });
  }, [setMovies]);

  return { movies };
};
