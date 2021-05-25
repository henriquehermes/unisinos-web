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

const Login = ({navigation}) => {
  return (
    <Container>
      <Title>Bem vindo</Title>
      <Box>
        <Label>E-mail</Label>
        <Input placeholder="SEU@EMAIL.COM" />

        <Button onPress={() => navigation.navigate('Home')}>
          <ButtonText>Entrar</ButtonText>
        </Button>

        <Button onPress={() => navigation.navigate('SignUp')}>
          <ButtonText>Cadastrar-se</ButtonText>
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
