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
  onPressSubmit: () => void;
}

const FormComment = ({ onPressSubmit }: Props) => (
  <FormWrapper>
    <FormContent>
      <InputWrapper>
        <Input placeholder="Write comment" />
      </InputWrapper>
      <ButtonWrapper>
        <Button title="Submit" onPress={onPressSubmit} />
      </ButtonWrapper>
    </FormContent>
  </FormWrapper>
);

export default FormComment;
