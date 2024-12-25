import { Button } from "../../components/Button";
import theme from "../../theme";
import { ContainerButton } from "./styles";
import { ContentDefault } from "../../components/ContentDefault";
import { FormMeal } from "../../components/FormMeal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerMealValidator } from "../../validators/registerMealValidator";
import { mealCreate } from "../../storage/meal/mealCreate";
import { useNavigation } from "@react-navigation/native";

export default function RegisterMeal() {
  const navigation = useNavigation();
  const {
    control,
    setValue,
    watch,
    getValues,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerMealValidator),
    defaultValues: {
      name: "",
      description: "",
      date: "",
      hour: "",
      isOnTheDiet: undefined,
    },
  });

  const handleCreateMeal = async () => {
    try {
      const mealFormated = {
        id: Math.random().toString(36).substring(2, 9),
        name: watch("name"),
        description: watch("description"),
        date: watch("date"),
        hour: watch("hour"),
        isOnTheDiet: watch("isOnTheDiet"),
      };

      await registerMealValidator.validate(mealFormated, { abortEarly: true });

      await mealCreate(mealFormated);

      navigation.navigate("completingMealRegistration", {
        isOnTheDiet: watch("isOnTheDiet"),
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <ContentDefault
        title="Nova refeição"
        backgroundColor={theme.COLORS.gray_300}
      >
        <>
          <FormMeal
            control={control}
            setValue={setValue}
            watch={watch}
            getValue={getValues}
            register={register}
            errors={errors}
          />

          <ContainerButton>
            <Button
              text="Cadastrar refeição"
              hasIcon={false}
              bgColor={theme.COLORS.gray_600}
              color={theme.COLORS.gray_200}
              onPress={() => handleCreateMeal()}
            />
          </ContainerButton>
        </>
      </ContentDefault>
    </>
  );
}
