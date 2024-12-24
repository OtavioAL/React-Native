import { Image } from "react-native";
import theme from "../../theme";
import { Container, Text, Title } from "./styles";
import { Button } from "../../components/Button";
import { useRoute } from "@react-navigation/native";

interface IPropsCompletingMealRegistration {
  isOnTheDiet: boolean;
}

export default function CompletingMealRegistration() {
  const route = useRoute();

  // const { isOnTheDiet } = route.params as IPropsCompletingMealRegistration;
  const isOnTheDiet = true;

  return (
    <Container>
      <Title
        color={isOnTheDiet ? theme.COLORS.green_dark : theme.COLORS.red_dark}
      >
        {isOnTheDiet ? "Continue assim!" : "Que pena!"}
      </Title>
      <Text>
        {isOnTheDiet
          ? "Você continua dentro da dieta. Muito bem!"
          : "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"}
      </Text>

      <Image
        style={{ marginTop: 30, marginBottom: 30 }}
        source={
          isOnTheDiet
            ? require("../../../assets/illustrationDiety.png")
            : require("../../../assets/illustrationNoDiety.png")
        }
      />

      <Button
        text="Ir para a página inicial"
        bgColor={theme.COLORS.gray_600}
        color={theme.COLORS.gray_200}
        onPress={() => {}}
        width="60%"
      />
    </Container>
  );
}
