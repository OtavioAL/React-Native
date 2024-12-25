import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { ContentDefault } from "../../components/ContentDefault";
import { FormMeal } from "../../components/FormMeal";
import theme from "../../theme";
import { ContainerButton } from "../RegisterMeal/styles";
import { mealsGet } from "../../storage/meal/mealsGet";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerMealValidator } from "../../validators/registerMealValidator";
import { mealEdit } from "../../storage/meal/mealEdit";

interface IPropsMeal {
  id: string;
  // hour: string;
  // name: string;
  // date: string;
  // description: string;
}

export default function EditMeal() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
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

  const route = useRoute();
  const { id } = route.params as IPropsMeal;

  const handleSaveChanges = async () => {
    try {
      const mealFormated = {
        id: id,
        name: watch("name"),
        description: watch("description"),
        date: watch("date"),
        hour: watch("hour"),
        isOnTheDiet: watch("isOnTheDiet"),
      };

      mealEdit(mealFormated);

      navigation.navigate("home");
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchMeal = async () => {
    try {
      const meal = await mealsGet(id);
      console.log("meal", meal);
      setValue("name", meal.name);
      setValue("description", meal.description);
      setValue("date", meal.date);
      setValue("hour", meal.hour);
      setValue("isOnTheDiet", meal.isOnTheDiet);
    } catch (error) {
      console.error("Failed to fetch meal", error);
    }
  };

  useEffect(() => {
    if (id) fetchMeal();
  }, [id]);

  return (
    <>
      <ContentDefault
        backgroundColor={theme.COLORS.gray_300}
        title="Editar refeição"
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
              text="Salvar alterações"
              hasIcon={false}
              bgColor={theme.COLORS.gray_600}
              color={theme.COLORS.gray_200}
              onPress={handleSaveChanges}
            />
          </ContainerButton>
        </>
      </ContentDefault>
    </>
  );
}
