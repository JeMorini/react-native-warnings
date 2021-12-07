import React, { useEffect, useState, useCallback } from "react";
import { Animated } from "react-native";
import {
  Container,
  Message,
  CloseButton,
  CloseIcon,
  ContainerLine,
} from "./styles";
import { scale } from "../constants/scaling";

interface WarningsProps {
  visible: boolean;
  message: string;
  color: string;
  fontColor: string;
}

export const Warnings: React.FC<WarningsProps> = (props: any) => {
  const positionAnim = new Animated.Value(1000);
  const timerAnim = new Animated.Value(350);
  const handleOpen = useCallback(() => {
    Animated.parallel([
      Animated.timing(positionAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(timerAnim, {
        toValue: 0,
        duration: 10000,
        useNativeDriver: false,
      }),
    ]).start();
  }, [positionAnim, timerAnim]);

  useEffect(() => {
    if (props.visible) {
      handleOpen();
      setTimeout(() => handleClose(), 10000);
    }
  }, [props]);

  const handleClose = useCallback(() => {
    Animated.timing(positionAnim, {
      toValue: 1000,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [positionAnim]);

  return (
    <Animated.View style={{ marginLeft: positionAnim }}>
      <Container style={{ elevation: 10 }} color={props.color}>
        <ContainerLine>
          <Message fontColor={props.fontColor}>{props.message}</Message>
          <CloseButton onPress={handleClose}>
            <CloseIcon>X</CloseIcon>
          </CloseButton>
        </ContainerLine>
        <Animated.View
          style={{
            width: timerAnim,
            height: scale(10),
            backgroundColor: "#FFF",
            marginTop: "auto",
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
          }}
        />
      </Container>
    </Animated.View>
  );
};
