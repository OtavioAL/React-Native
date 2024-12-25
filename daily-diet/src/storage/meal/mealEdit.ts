import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealDTO } from "../MealsStorageDTO";
import { MEAL_COLLECTION } from "../storageConfig";

export const mealEdit = async (meal: MealDTO) => {
  try {
    const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION);
    const meals = storedMeals ? JSON.parse(storedMeals) : [];

    const mealsUpdate = meals.map((storedMeal: MealDTO) => {
      if (storedMeal.id === meal.id) {
        return meal;
      }

      return storedMeal;
    });

    const mealsString = JSON.stringify(mealsUpdate);

    await AsyncStorage.setItem(MEAL_COLLECTION, mealsString);
  } catch (error) {
    throw error;
  }
};
