import React from 'react';
import styled from 'styled-components/native';
import { Input, Button } from 'react-native-elements';

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

interface Props {
  text: string;
  onPressSubmit: () => void;
  onChangeText: (value: string) => void;
}

const FormComment = ({ text, onPressSubmit, onChangeText }: Props) => (
  <FormWrapper>
    <FormContent>
      <InputWrapper>
        <Input
          placeholder="Write a comment"
          value={text}
          onChangeText={onChangeText}
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button title="Submit" onPress={onPressSubmit} />
      </ButtonWrapper>
    </FormContent>
  </FormWrapper>
);

export default FormComment;
