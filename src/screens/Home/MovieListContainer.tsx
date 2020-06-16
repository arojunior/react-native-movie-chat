import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../common/infrastructure/constants';
import { useMovies } from './MovieService';

interface Props {
  Component: any;
}

const MovieListContainer = ({ Component }: Props) => {
  const navigation = useNavigation();
  const movieList = useMovies();

  const handleClickMovie = () => {
    navigation.navigate(SCREENS.CHAT);
  };

  return <Component handleClickMovie={handleClickMovie} movieList={movieList} />;
};

export default MovieListContainer;
