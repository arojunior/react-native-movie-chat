import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Movie } from './MovieService';

interface Props {
  handleClickMovie: () => void;
  movieList: Movie[];
}

const MovieListComponent = ({ handleClickMovie, movieList }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={handleClickMovie}>
        <Text>Home Screen</Text>
        <Text>{JSON.stringify(movieList)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieListComponent;
