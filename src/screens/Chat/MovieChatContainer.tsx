import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Comment } from '../../types';
import { useComments, addComment } from './MovieChatService';

interface Props {
  Component: any;
}

const MovieChatContainer = ({ Component }: Props) => {
  const [text, setText] = useState<string>('');
  const { params: { movie: { slug } } } = useRoute() as any;
  const comments = useComments(slug) as Comment[];

  const onChangeText = (value: string) => {
    setText(value);
  };

  const onPressSubmit = () => {
    addComment({ slug, text });
    setText(``);
  };

  return (
    <Component
      comments={comments}
      text={text}
      onPressSubmit={onPressSubmit}
      onChangeText={onChangeText}
    />
  );
};

export default MovieChatContainer;
