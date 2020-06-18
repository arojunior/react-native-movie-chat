import { useState, useEffect } from 'react';
import slugify from '@sindresorhus/slugify';
import httpService from '../../services/httpService';
import loggerService from '../../services/loggerService';
import { API_URL } from '../../common/infrastructure/constants';
import { Movie } from '../../types';

const mapMovies = (data: Movie[]) => {
  return data.map(({ title, year }) => ({
    title,
    slug: slugify(`${title} ${year}`),
  }));
};

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    httpService
      .get(API_URL)
      .then(({ data }) => {
        setMovies(mapMovies(data));
      })
      .catch((error) => {
        loggerService.error(`Error getting movie list`, error);
      });
  }, [setMovies]);

  return movies;
};
