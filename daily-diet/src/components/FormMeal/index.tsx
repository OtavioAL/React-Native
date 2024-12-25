import {
  useForm,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { Input } from "../Input";
import { MealDTO } from "../../storage/MealsStorageDTO";
import { ContainerRow, IndicatorStatus, OptionsSelect, Text } from "./styles";
import { formatDate } from "../../utils/formatedDate";
import { formatHour } from "../../utils/formatedHours";

export interface IFormMealProps {
  control: any;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  watch: UseFormWatch<any>;
  getValue: UseFormGetValues<any>;
  errors: any;
}

export const FormMeal = ({
  control,
  setValue,
  watch,
  getValue,
  register,
  errors,
}: IFormMealProps) => {
  return (
    <>
      <Input
        label="Nome"
        onChangeText={(text) => setValue("name", text)}
        value={watch("name")}
        name="name"
        errors={errors}
      />
      <Input
        label="Descrição"
        multiline
        onChangeText={(text) => setValue("description", text)}
        value={watch("description")}
        name="description"
        errors={errors}
      />

      <ContainerRow>
        <Input
          width="50%"
          type="date"
          label="Data"
          keyboardType="numeric"
          onChangeText={(text) => setValue("date", formatDate(text))}
          value={watch("date")}
          name="date"
          errors={errors}
        />
        <Input
          type="time"
          width="50%"
          label="Hora"
          keyboardType="numeric"
          onChangeText={(text) => setValue("hour", formatHour(text))}
          value={watch("hour")}
          name="hour"
          errors={errors}
        />
      </ContainerRow>

      <Text>Está dentro da dieta?</Text>
      <ContainerRow>
        <OptionsSelect
          isSelected={
            watch("isOnTheDiet") === undefined || watch("isOnTheDiet") === false
              ? undefined
              : true
          }
          onPress={() => setValue("isOnTheDiet", true)}
        >
          <IndicatorStatus isGreenOption />
          <Text>Sim</Text>
        </OptionsSelect>
        <OptionsSelect
          isSelected={
            watch("isOnTheDiet") === undefined || watch("isOnTheDiet") === true
              ? undefined
              : false
          }
          onPress={() => setValue("isOnTheDiet", false)}
        >
          <IndicatorStatus isGreenOption={false} />
          <Text>Não</Text>
        </OptionsSelect>
      </ContainerRow>
    </>
  );
};
