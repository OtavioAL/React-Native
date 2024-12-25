export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        listMeals;
        numberMealsWithoutDiet;
        numberMealsOutsideDiet;
        percentageMealsOnDiet;
        totalMeals;
      };
      registerMeal: undefined;
      completingMealRegistration: { isOnTheDiet: boolean };
      meal: { id: string };
      editMeal: { id: string };
    }
  }
}
