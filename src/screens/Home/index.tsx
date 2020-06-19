import React from 'react';
import MovieListContainer from './MovieListContainer';
import MovieListComponent from './MovieListComponent';

const MovieListEnhancer = () => {
  return <MovieListContainer Component={MovieListComponent} />;
};

export default MovieListEnhancer;
