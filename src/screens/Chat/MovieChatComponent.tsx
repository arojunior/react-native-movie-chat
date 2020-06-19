import React from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import styled from 'styled-components/native';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import { Comment } from '../../types';

const ContentWrapper = styled.View`
  flex: 1;
`;

interface Props {
  comments: Comment[];
  text: string;
  onPressSubmit: () => void;
  onChangeText: (value: string) => void;
}

const MovieChatComponent = ({
  comments,
  text,
  onPressSubmit,
  onChangeText,
}: Props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={80}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ContentWrapper>
          <CommentList comments={comments} />
          <CommentForm
            text={text}
            onPressSubmit={onPressSubmit}
            onChangeText={onChangeText}
          />
        </ContentWrapper>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default MovieChatComponent;
