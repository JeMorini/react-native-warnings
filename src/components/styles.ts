import styled from "styled-components";
import { scale } from "../constants/scaling";

export const Container = styled.View`
  background-color: ${(props) => props.color};
  height: ${scale(80)}px;
  border-radius: ${scale(6)}px;
  width: ${scale(350)}px;
  justify-content: center;
  margin-top: ${scale(-100)}px;
`;

export const ContainerLine = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text`
  font-weight: bold;
  font-size: 25px;
  color: ${(props) => props.fontColor};
  width: 80%;
  margin: ${scale(5)}px;
`;

export const CloseButton = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 50px;
  opacity: 0.4;
  width: ${scale(35)}px;
  height: ${scale(35)}px;
  align-items: center;
  justify-content: center;
  margin: ${scale(5)}px;
`;

export const CloseIcon = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
