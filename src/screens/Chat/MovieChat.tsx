import React from 'react';
import MovieChatContainer from './MovieChatContainer';
import MovieChatComponent from './MovieChatComponent';

const MovieChatEnhancer = () => {
  return <MovieChatContainer Component={MovieChatComponent} />;
};

export default MovieChatEnhancer;
