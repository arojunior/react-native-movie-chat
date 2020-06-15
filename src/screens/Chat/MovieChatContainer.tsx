import React, { ComponentType } from 'react';

interface Props {
  Component: ComponentType;
}

const MovieChatContainer = ({ Component }: Props) => {
  return <Component />;
};

export default MovieChatContainer;
