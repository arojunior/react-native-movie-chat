import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../common/infrastructure/constants';
import { useMovies } from './MovieService';
import { Movie } from  '../../types';

interface Props {
  Component: any;
}

const MovieListContainer = ({ Component }: Props) => {
  const navigation = useNavigation();
  const movies = useMovies();

  const handleClickMovie = (movie: Movie) => {
    navigation.navigate(SCREENS.CHAT, { movie });
  };

  return <Component movies={movies} handleClickMovie={handleClickMovie} />;
};

export default MovieListContainer;
