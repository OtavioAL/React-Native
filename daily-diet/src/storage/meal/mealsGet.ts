import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";
import { MealDTO } from "../MealsStorageDTO";
import { sortByDate } from "../../utils/sortByDate";
import { mealsGetAll } from "./mealsGetAll";

export const mealsGet = async (idMeal: string) => {
  try {
    const allMeals = await mealsGetAll();

    const mealsSelect = allMeals.find((meal: MealDTO) => meal.id === idMeal);

    return mealsSelect ?? [];
  } catch (error) {
    throw error;
  }
};
