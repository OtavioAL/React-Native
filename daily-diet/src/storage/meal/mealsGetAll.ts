import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";
import { MealDTO } from "../MealsStorageDTO";
import { sortByDate } from "../../utils/sortByDate";

export const mealsGetAll = async () => {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: MealDTO[] = storage ? JSON.parse(storage) : [];

    const mealsSorted = sortByDate(meals);

    return mealsSorted;
  } catch (error) {
    throw error;
  }
};
