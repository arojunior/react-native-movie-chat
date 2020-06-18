import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Comment } from '../../types';
import { useComments } from './MovieChatService';

interface Props {
  Component: any;
}

const MovieChatContainer = ({ Component }: Props) => {
  const route = useRoute() as any;
  const comments = useComments(route.params?.movie?.slug) as Comment[];
  
  const onPressSubmit = () => {
    console.log('submit');
  };

  return <Component comments={comments} onPressSubmit={onPressSubmit} />;
};

export default MovieChatContainer;
