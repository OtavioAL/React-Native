import { TextInput } from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import theme from "../../theme";
import {
  ContainerButton,
  ContainerRow,
  IndicatorStatus,
  OptionsSelect,
  Text,
} from "./styles";
import { ContentDefault } from "../../components/ContentDefault";
import { FormMeal } from "../../components/FormMeal";

export default function RegisterMeal() {
  return (
    <>
      <ContentDefault
        title="Nova refeição"
        backgroundColor={theme.COLORS.gray_300}
      >
        <>
          <FormMeal />

          <ContainerButton>
            <Button
              text="Cadastrar refeição"
              hasIcon={false}
              bgColor={theme.COLORS.gray_600}
              color={theme.COLORS.gray_200}
              onPress={() => {}}
            />
          </ContainerButton>
        </>
      </ContentDefault>
    </>
  );
}
