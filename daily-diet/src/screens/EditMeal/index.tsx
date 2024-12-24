import { Button } from "../../components/Button";
import { ContentDefault } from "../../components/ContentDefault";
import { FormMeal } from "../../components/FormMeal";
import theme from "../../theme";
import { ContainerButton } from "../RegisterMeal/styles";

export default function EditMeal() {
  return (
    <>
      <ContentDefault
        backgroundColor={theme.COLORS.gray_300}
        title="Editar refeição"
      >
        <>
          <FormMeal />

          <ContainerButton>
            <Button
              text="Salvar alterações"
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
