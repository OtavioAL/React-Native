import { Input } from "../Input";
import { ContainerRow, IndicatorStatus, OptionsSelect, Text } from "./styles";

export const FormMeal = () => {
  return (
    <>
      <Input label="Nome" onChangeText={() => {}} />
      <Input label="Descrição" multiline onChangeText={() => {}} />

      <ContainerRow>
        <Input
          width="50%"
          label="Data"
          keyboardType="numeric"
          onChangeText={() => {}}
        />
        <Input
          width="50%"
          label="Hora"
          keyboardType="numeric"
          onChangeText={() => {}}
        />
      </ContainerRow>

      <Text>Está dentro da dieta?</Text>
      <ContainerRow>
        <OptionsSelect isSelected>
          <IndicatorStatus isGreenOption />
          <Text>Sim</Text>
        </OptionsSelect>
        <OptionsSelect isSelected={undefined}>
          <IndicatorStatus isGreenOption={false} />
          <Text>Não</Text>
        </OptionsSelect>
      </ContainerRow>
    </>
  );
};
