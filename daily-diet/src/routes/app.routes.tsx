import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Statistics from "../screens/Statistics";
import RegisterMeal from "../screens/RegisterMeal";
import CompletingMealRegistration from "../screens/CompletingMealRegistration";
import EditMeal from "../screens/EditMeal";
import Meal from "../screens/Meal";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home"
    >
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="registerMeal" component={RegisterMeal} />
      <Screen name="editMeal" component={EditMeal} />
      <Screen name="meal" component={Meal} />
      <Screen
        name="completingMealRegistration"
        component={CompletingMealRegistration}
      />
    </Navigator>
  );
}
