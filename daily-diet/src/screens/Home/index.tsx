import { Text } from "react-native";
import { Container, Text as TextStyles } from "./styles";
import { Header } from "../../components/Header";
import { StatisticsBanner } from "../../components/StatisticsBanner";
import { Button } from "../../components/Button";
import { Plus } from "phosphor-react-native";
import theme from "../../theme";
import { ListMeals } from "../../components/ListMeals";
import { useCallback, useEffect, useState } from "react";
import { MealDTO, MealPlan } from "../../storage/MealsStorageDTO";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { mealsGetAll } from "../../storage/meal/mealsGetAll";

export default function Home() {
  const navigation = useNavigation();
  const [meals, setMeals] = useState<MealPlan[]>([]);
  const [numberMealsWithoutDiet, setNumberMealsWithoutDiet] = useState(0);
  const [numberMealsOutsideDiet, setNumberMealsOutsideDiet] = useState(0);
  const [totalMeals, setTotalMeals] = useState(0);
  const [percentageMealsOnDiet, setPercentageMealsOnDiet] = useState(0);

  const fetchListMeals = async () => {
    try {
      const allMeals = await mealsGetAll();

      const groupedMealPlans = allMeals.reduce(
        (acc: MealPlan[], meal: MealDTO) => {
          const existingPlan = acc.find((plan) => plan.date === meal.date);

          if (existingPlan) {
            existingPlan.meals.push(meal);
          } else {
            acc.push({
              date: meal.date,
              meals: [{ ...meal }],
            });
          }

          return acc;
        },
        []
      );

      setMeals(groupedMealPlans);
    } catch (error) {
      console.error("Failed to fetch meals", error);
    }
  };

  const calculateMeals = () => {
    let countMeals = 0;
    let countMealsWithoutDiet = 0;

    meals.forEach((meal) => {
      countMeals += meal?.meals?.length;

      meal?.meals?.forEach((mealOfDay) => {
        if (!mealOfDay.isOnTheDiet) {
          countMealsWithoutDiet += 1;
        }
      });
    });

    const countMealsOnDiet = countMeals - countMealsWithoutDiet;
    const percentageMealsOnDiet =
      countMeals > 0 ? (countMealsOnDiet / countMeals) * 100 : 0;

    setTotalMeals(countMeals);
    setNumberMealsOutsideDiet(countMealsWithoutDiet);
    setNumberMealsWithoutDiet(countMealsOnDiet);
    setPercentageMealsOnDiet(percentageMealsOnDiet);
  };

  const handleGoToStatistics = () => {
    navigation.navigate("statistics", {
      listMeals: meals,
      numberMealsWithoutDiet,
      numberMealsOutsideDiet,
      percentageMealsOnDiet,
      totalMeals,
    });
  };

  const handleGoToRegisterMeal = () => {
    navigation.navigate("registerMeal");
  };

  useFocusEffect(
    useCallback(() => {
      fetchListMeals();
    }, [])
  );

  useEffect(() => {
    if (meals?.length) {
      calculateMeals();
    }
  }, [meals]);

  return (
    <Container>
      <Header />

      <StatisticsBanner
        title={`${percentageMealsOnDiet.toFixed(2)}%`}
        subtitle="das refeições dentro da dieta"
        bgColor={percentageMealsOnDiet >= 60 ? "green" : "red"}
        iconPosition="right"
        onPress={handleGoToStatistics}
      />

      <TextStyles>Refeições</TextStyles>

      <Button
        text="Nova refeição"
        hasIcon={true}
        bgColor={theme.COLORS.gray_600}
        color={theme.COLORS.gray_200}
        icon={<Plus size={18} color={theme.COLORS.gray_100} />}
        onPress={handleGoToRegisterMeal}
      />

      <ListMeals meals={meals} />
    </Container>
  );
}
