import React from 'react';
import {Button, ButtonText, Container, Title} from './styles';

const Home = ({navigation}) => {
  return (
    <Container>
      <Title>Home - Aguardando novas tarefas</Title>
      <Button onPress={() => navigation.goBack()}>
        <ButtonText>Voltar</ButtonText>
      </Button>
    </Container>
  );
};

export default Home;
