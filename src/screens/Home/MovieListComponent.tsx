import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';
import styled from 'styled-components/native';
import { Movie } from './MovieService';

const LoadingWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface Props {
  handleClickMovie: (movie: Movie) => void;
  movies: Movie[];
}

interface RenderItem {
  item: Movie;
}

const MovieListComponent = ({ movies, handleClickMovie }: Props) => {
  if (!movies.length) {
    return (
      <LoadingWrapper>
        <ActivityIndicator />
      </LoadingWrapper>
    );
  }

  const renderItem = ({ item: movie }: RenderItem) => (
    <ListItem
      title={movie.title}
      onPress={() => handleClickMovie(movie)}
      bottomDivider
      chevron
    />
  );

  return (
    <FlatList<Movie>
      data={movies}
      renderItem={renderItem}
      keyExtractor={(movie) => movie.slug}
    />
  );
};

export default MovieListComponent;
