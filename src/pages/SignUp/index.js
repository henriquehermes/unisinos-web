import React from 'react';
import {
  Box,
  Button,
  ButtonText,
  Container,
  Input,
  Label,
  Title,
} from './styles';

const SignUp = ({navigation}) => {
  return (
    <Container>
      <Title>Cadastro</Title>
      <Box>
        <Label>Nome</Label>
        <Input placeholder="SEU NOME" />

        <Label>E-mail</Label>
        <Input placeholder="SEU@EMAIL.COM" />

        <Button onPress={() => navigation.goBack()}>
          <ButtonText>Cadastrar</ButtonText>
        </Button>
      </Box>
    </Container>
  );
};

export default SignUp;
