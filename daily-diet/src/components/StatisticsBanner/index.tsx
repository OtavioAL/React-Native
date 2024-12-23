import { View } from "react-native";
import { Container, Description, Title } from "./styles";

import {
  IPropsColorsStatisticsBanner,
  ContainerArrowBack,
  ContainerArrowUpRight,
  IconArrowBack,
  IconArrowUpRight,
} from "./styles";
import { ViewProps } from "react-native";

interface ButtonFloatProps {
  iconPosition?: "left" | "right";
}

interface IPropsStatisticsBanner
  extends IPropsColorsStatisticsBanner,
    ButtonFloatProps,
    ViewProps {
  title: string | number;
  subtitle?: string;
  showIconButton?: boolean;
  onPress?: () => void;
}

export const StatisticsBanner = ({
  bgColor = "green",
  iconPosition = "left",
  showIconButton = true,
  onPress,
  title,
  subtitle,
  ...props
}: IPropsStatisticsBanner) => {
  return (
    <Container bgColor={bgColor} {...props}>
      {showIconButton &&
        (iconPosition === "left" ? (
          <ContainerArrowBack onPress={onPress}>
            <IconArrowBack bgColor={bgColor} />
          </ContainerArrowBack>
        ) : (
          <ContainerArrowUpRight onPress={onPress}>
            <IconArrowUpRight bgColor={bgColor} />
          </ContainerArrowUpRight>
        ))}

      <Title>{title}</Title>

      <Description>{subtitle}</Description>

      {/* <Texts fontSize="2xl" fontFamily="bold">
        {title}
      </Texts>
      <Texts fontSize="sm" color="gray_600" textAlign="center">
        {subtitle}
      </Texts> */}
    </Container>
  );
};
