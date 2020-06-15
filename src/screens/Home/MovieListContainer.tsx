import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../common/infrastructure/constants';

interface Props {
  Component: any;
}

const MovieListContainer = ({ Component }: Props) => {
  const navigation = useNavigation();

  const handleClickMovie = () => {
    navigation.navigate(SCREENS.CHAT);
  };

  return <Component handleClickMovie={handleClickMovie} />;
};

export default MovieListContainer;
