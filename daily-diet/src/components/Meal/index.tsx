import { TouchableOpacityProps } from "react-native";
import {
  Container,
  ContainerText,
  Divider,
  IconStatus,
  MealStatusStylesProps,
  TextHours,
  TextInformation,
} from "./styles";

interface MealProps extends MealStatusStylesProps, TouchableOpacityProps {
  id: string;
  hour: string;
  name: string;
}

export const Meal = ({ id, name, hour, isOnTheDiet, ...props }: MealProps) => {
  return (
    <Container id={id} {...props}>
      <TextHours>{hour}</TextHours>
      <Divider />
      <ContainerText>
        <TextInformation>{name}</TextInformation>
      </ContainerText>
      <IconStatus isOnTheDiet={isOnTheDiet} />
    </Container>
  );
};
