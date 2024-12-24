import { Button } from "../../components/Button";
import { ContentDefault } from "../../components/ContentDefault";
import theme from "../../theme";
import {
  Container,
  IndicatorStatus,
  OptionsSelect,
  Text,
  TextDate,
  Title,
} from "./styles";
import { PencilLine, Trash } from "phosphor-react-native";

interface IPropsMeal {
  id: string;
  hour: string;
  name: string;
  date: string;
  description: string;
}

export default function Meal() {
  return (
    <>
      <ContentDefault
        backgroundColor={theme.COLORS.green_light}
        title="Refeição"
      >
        <Container>
          <Title>Sanduiche</Title>

          <Text>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </Text>

          <TextDate>Data e hora</TextDate>

          <Text>12/08/2022 às 16:00</Text>

          <OptionsSelect isSelected>
            <IndicatorStatus isGreenOption />
            <Text>dentro da dieta</Text>
          </OptionsSelect>
        </Container>

        <Button
          text="Editar refeição"
          hasIcon={true}
          bgColor={theme.COLORS.gray_600}
          color={theme.COLORS.gray_200}
          icon={<PencilLine size={18} color={theme.COLORS.gray_100} />}
          onPress={() => {}}
        />
        <Button
          text="Excluir refeição"
          hasIcon={true}
          bgColor={"transparent"}
          color={theme.COLORS.gray_700}
          icon={<Trash size={18} color={theme.COLORS.gray_700} />}
          onPress={() => {}}
          type="secondary"
        />
      </ContentDefault>
    </>
  );
}
