import { SectionList, Text } from "react-native";
import { MealPlan } from "../../storage/MealsStorageDTO";
import { Title } from "./styles";
import { Meal } from "../Meal";
import { useNavigation } from "@react-navigation/native";

interface IPropsMeals {
  meals: MealPlan[];
}

export const ListMeals = ({ meals }: IPropsMeals) => {
  const navigation = useNavigation();

  const handleNavigationMeal = (id: string) => {
    navigation.navigate("meal", { id });
  };

  return (
    <SectionList
      sections={meals.map((meal) => ({ date: meal.date, data: meal.meals }))}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <>
          <Text>Não há refeições cadastradas ainda.</Text>
        </>
      )}
      contentContainerStyle={
        !meals.length && {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }
      }
      renderSectionHeader={({ section }) => <Title>{section.date}</Title>}
      renderItem={({ item }) => (
        <Meal
          {...item}
          isOnTheDiet={item.isOnTheDiet}
          onPress={() => handleNavigationMeal(item.id)}
        />
      )}
      style={{ marginBottom: 32 }}
    />
  );
};
