import { ButtonStylesProps, Container, TitleButton } from "./styles";
import { TouchableOpacityProps } from "react-native";
import React from "react";

interface ButtonProps extends ButtonStylesProps, TouchableOpacityProps {
  onPress?: () => void;
  hasIcon?: boolean;
  icon?: JSX.Element;
  text: string;
}

export const Button = ({
  onPress,
  bgColor,
  color = "gray_100",
  hasIcon = false,
  icon,
  text,
  width = "100%",
  type = "primary",
  ...props
}: ButtonProps) => {
  return (
    <Container
      onPress={onPress}
      bgColor={bgColor}
      width={width}
      {...props}
      type={type}
    >
      {hasIcon && icon}
      <TitleButton color={color}>{text}</TitleButton>
    </Container>
  );
};
