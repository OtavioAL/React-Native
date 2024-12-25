import { Text } from "react-native";
import {
  Card,
  Container,
  ContainerRow,
  Content,
  HeaderPage,
  TextCard,
  Title,
  TitleCard,
} from "./styles";
import { StatisticsBanner } from "../../components/StatisticsBanner";
import theme from "../../theme";
import { MealPlan } from "../../storage/MealsStorageDTO";
import { useNavigation, useRoute } from "@react-navigation/native";

export interface IPropsStatistics {
  listMeals: MealPlan[];
  numberMealsWithoutDiet: number;
  numberMealsOutsideDiet: number;
  percentageMealsOnDiet: number;
  totalMeals: number;
}

export default function Statistics() {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    listMeals,
    numberMealsOutsideDiet,
    numberMealsWithoutDiet,
    percentageMealsOnDiet,
    totalMeals,
  } = route.params as IPropsStatistics;

  const handleGoToHome = () => {
    navigation.goBack();
  };

  const bestSequence = () => {
    let best = 0;
    let current = 0;

    listMeals.forEach((meal) => {
      meal.meals.forEach((mealOfDay) => {
        if (mealOfDay.isOnTheDiet) {
          current++;
          best = Math.max(best, current);
        } else {
          current = 0;
        }
      });
    });

    return best;
  };

  return (
    <Container
      bgColor={
        percentageMealsOnDiet >= 60
          ? theme.COLORS.green_light
          : theme.COLORS.red_light
      }
    >
      <HeaderPage
        bgColor={
          percentageMealsOnDiet >= 60
            ? theme.COLORS.green_light
            : theme.COLORS.red_light
        }
      >
        <StatisticsBanner
          title={`${percentageMealsOnDiet.toFixed(2)}%`}
          subtitle="das refeições dentro da dieta"
          bgColor={percentageMealsOnDiet >= 60 ? "green" : "red"}
          iconPosition="left"
          onPress={handleGoToHome}
        />
      </HeaderPage>
      <Content>
        <Title>Estatísticas gerais</Title>

        <Card bgColor={theme.COLORS.gray_300}>
          <TitleCard>{bestSequence()}</TitleCard>
          <TextCard>melhor sequência de pratos dentro da dieta</TextCard>
        </Card>
        <Card bgColor={theme.COLORS.gray_300}>
          <TitleCard>{totalMeals ?? 0}</TitleCard>
          <TextCard>refeições registradas</TextCard>
        </Card>

        <ContainerRow>
          <Card bgColor={theme.COLORS.green_light}>
            <TitleCard>{numberMealsWithoutDiet ?? 0}</TitleCard>
            <TextCard>refeições dentro da dieta</TextCard>
          </Card>
          <Card bgColor={theme.COLORS.red_light}>
            <TitleCard>{numberMealsOutsideDiet ?? 0}</TitleCard>
            <TextCard>refeições fora da dieta</TextCard>
          </Card>
        </ContainerRow>
      </Content>
    </Container>
  );
}
