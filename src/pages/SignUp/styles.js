import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 1;
  background-color: #4fa444;
  padding: 0px 30px;
`;

export const Box = styled.View`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 2px solid #fff;
  border-radius: 6px;
  margin-top: 15px;
  background-color: #fff;
  width: 100%;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 27px;
`;

export const Label = styled.Text`
  color: #333;
  font-size: 13px;
  font-weight: 400;
  line-height: 24px;
`;

export const Input = styled.TextInput`
  color: #333;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  max-width: 100%;
  padding: 10px;
  border: 1px solid #e4e4e4;
  border-radius: 3px;
  height: 45px;
  text-transform: uppercase;
  margin-bottom: 25px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #4fa444;
  width: 100%;
  height: 45px;
  color: #fff;
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
  color: #fff;
  font-size: 14px;
  font-weight: 700;
`;
