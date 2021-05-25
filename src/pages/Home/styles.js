import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 1;
  background-color: #4fa444;
  padding: 0px 30px;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #fff;
  width: 100%;
  height: 45px;
  color: #4fa444;
  font-size: 14px;
  font-weight: 700;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom: 15px;
`;

export const ButtonText = styled.Text`
  color: #4fa444;
  font-size: 14px;
  font-weight: 700;
`;
