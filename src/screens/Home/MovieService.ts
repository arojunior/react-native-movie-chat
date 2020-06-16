import { useState, useEffect } from 'react';
import slugify from '@sindresorhus/slugify';
import httpService from '../../services/httpService';
import { API_URL } from '../../common/infrastructure/constants';

const mapMovies = (data: Movie[]) => {
  return data.map(({ title }) => ({
    title,
    slug: slugify(title),
  }));
};

export type Movie = {
  title: string;
  slug: string;
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
