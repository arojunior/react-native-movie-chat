import React from 'react';
import { Comment } from '../../types';

interface Props {
  Component: any;
}

const MovieChatContainer = ({ Component }: Props) => {
  const comments: Comment[] = [
    {
      id: '1',
      text: 'Test comment',
      author: 'Junior',
    },
  ];

  const onPressSubmit = () => {
    console.log('submit');
  };

  return <Component comments={comments} onPressSubmit={onPressSubmit} />;
};

export default MovieChatContainer;
