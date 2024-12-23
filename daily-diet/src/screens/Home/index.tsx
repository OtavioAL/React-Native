import { Text } from "react-native";
import { Container, Text as TextStyles } from "./styles";
import { Header } from "../../components/Header";
import { StatisticsBanner } from "../../components/StatisticsBanner";
import { Button } from "../../components/Button";
import { Plus } from "phosphor-react-native";
import theme from "../../theme";
import { ListMeals } from "../../components/ListMeals";
import { useState } from "react";
import { MealPlan } from "../../storage/MealsStorageDTO";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  const [meals, setMeals] = useState<MealPlan[]>([
    {
      date: "2023-08-01",
      meals: [
        {
          id: "1",
          name: "Cafe da manha ",
          isOnTheDiet: true,
          description: "Cafe da manha",
          hour: "10:00",
          // date: "2023-08-01",
        },
      ],
    },
  ]);

  const handleGoToStatistics = () => {
    navigation.navigate("statistics");
  };

  return (
    <Container>
      <Header />

      <StatisticsBanner
        title={"90,86%"}
        subtitle="das refeições dentro da dieta"
        bgColor={"green"}
        iconPosition="right"
        // style={{ marginBottom: 40 }}
        onPress={handleGoToStatistics}
      />

      <TextStyles>Refeições</TextStyles>

      <Button
        text="Nova refeição"
        hasIcon={true}
        bgColor={theme.COLORS.gray_600}
        color={theme.COLORS.gray_200}
        icon={<Plus size={18} color={theme.COLORS.gray_100} />}
        onPress={() => {}}
      />

      <ListMeals meals={meals} />
    </Container>
  );
}
