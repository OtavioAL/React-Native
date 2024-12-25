import { useNavigation, useRoute } from "@react-navigation/native";
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
import { useEffect, useState } from "react";
import { mealsGet } from "../../storage/meal/mealsGet";
import { MealDTO } from "../../storage/MealsStorageDTO";
import { mealRemove } from "../../storage/meal/mealRemove";
import { Alert } from "react-native";

interface IPropsMeal {
  id: string;
  // hour: string;
  // name: string;
  // date: string;
  // description: string;
}

export default function Meal() {
  const route = useRoute();
  const { id } = route.params as IPropsMeal;
  const [meal, setMeal] = useState<MealDTO>();
  const navigation = useNavigation();

  const fetchMeal = async () => {
    try {
      const meal = await mealsGet(id);
      console.log("meal", meal);
      setMeal(meal);
    } catch (error) {
      console.error("Failed to fetch meal", error);
    }
  };

  const mealsRemove = async () => {
    try {
      await mealRemove(id);
      navigation.navigate("home");
    } catch (error) {
      console.log("error", error);
    }
  };

  async function handleMealRemove() {
    Alert.alert("Remover", "Deseja remover a refeição?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => mealsRemove() },
    ]);
  }

  const handleGoToEdit = () => {
    navigation.navigate("editMeal", { id });
  };

  useEffect(() => {
    if (id) fetchMeal();
  }, [id]);

  return (
    <>
      <ContentDefault
        backgroundColor={theme.COLORS.green_light}
        title="Refeição"
      >
        <Container>
          <Title>{meal?.name}</Title>

          <Text>{meal?.description}</Text>

          <TextDate>Data e hora</TextDate>

          <Text>{`${meal?.date} às ${meal?.hour}`}</Text>

          <OptionsSelect isSelected={meal?.isOnTheDiet}>
            <IndicatorStatus isGreenOption={meal?.isOnTheDiet} />
            <Text>
              {meal?.isOnTheDiet ? "dentro da dieta" : "fora da dieta"}
            </Text>
          </OptionsSelect>
        </Container>

        <Button
          text="Editar refeição"
          hasIcon={true}
          bgColor={theme.COLORS.gray_600}
          color={theme.COLORS.gray_200}
          icon={<PencilLine size={18} color={theme.COLORS.gray_100} />}
          onPress={handleGoToEdit}
        />
        <Button
          text="Excluir refeição"
          hasIcon={true}
          bgColor={"transparent"}
          color={theme.COLORS.gray_700}
          icon={<Trash size={18} color={theme.COLORS.gray_700} />}
          onPress={handleMealRemove}
          type="secondary"
        />
      </ContentDefault>
    </>
  );
}
