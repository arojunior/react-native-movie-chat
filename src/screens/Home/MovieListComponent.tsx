import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface Props {
  handleClickMovie: () => void;
}

const MovieListComponent = ({ handleClickMovie }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={handleClickMovie}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieListComponent;
