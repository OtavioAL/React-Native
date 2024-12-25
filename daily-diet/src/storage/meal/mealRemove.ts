import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealsGetAll } from "./mealsGetAll";
import { MEAL_COLLECTION } from "../storageConfig";
import { MealDTO } from "../MealsStorageDTO";

export const mealRemove = async (id: string) => {
  try {
    const storedMeals = await mealsGetAll();

    const mealsFilter = storedMeals.filter((meal: MealDTO) => meal.id !== id);

    const meals = JSON.stringify(mealsFilter);

    await AsyncStorage.setItem(MEAL_COLLECTION, meals);
  } catch (error) {
    throw error;
  }
};
