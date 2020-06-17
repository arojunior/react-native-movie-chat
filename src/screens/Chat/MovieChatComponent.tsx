import React from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import styled from 'styled-components/native';
import { Input, Button } from 'react-native-elements';

const ContentWrapper = styled.View`
  flex: 1;
`;

const FormWrapper = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const FormContent = styled.View`
  flex: 1;
  flex-direction: row;
`;

const InputWrapper = styled.View`
  width: 70%;
`;

const ButtonWrapper = styled.View`
  width: 30%;
  padding-right: 10px;
  padding-left: 10px;
`;

const MovieChatComponent = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={80}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ContentWrapper>
          <Text>Chat Screen</Text>
          <FormWrapper>
            <FormContent>
              <InputWrapper>
                <Input placeholder="Comment" />
              </InputWrapper>
              <ButtonWrapper>
                <Button title="Submit" />
              </ButtonWrapper>
            </FormContent>
          </FormWrapper>
        </ContentWrapper>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default MovieChatComponent;
