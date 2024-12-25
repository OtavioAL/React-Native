import * as Yup from "yup";
import { MealDTO } from "../storage/MealsStorageDTO";

export const registerMealValidator = Yup.object().shape({
  name: Yup.string().required("Informe o nome da refeição"),
  description: Yup.string().required("Informe a descrição da refeição"),
  date: Yup.string().required("Informe a data da refeição"),
  hour: Yup.string().required("Informe a hora da refeição"),
  isOnTheDiet: Yup.boolean().required(
    "Informe se a refeição estava dentro da dieta"
  ),
});
