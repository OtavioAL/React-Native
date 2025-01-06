import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { gluestackUIConfig } from "../../config/gluestack-ui.config";

import { Platform } from "react-native";
import { House, SignOut, Tag } from "phosphor-react-native";
import { Home } from "@screens/home";

type AppRoutes = {
  home: undefined;
  homeee: undefined;
  homeeee: undefined;
};
export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { tokens } = gluestackUIConfig;
  const iconSize = tokens.space["7"];

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: tokens.colors.gray700,
        tabBarInactiveTintColor: tokens.colors.gray400,
        tabBarStyle: {
          backgroundColor: tokens.colors.gray100,
          borderTopWidth: 0,
          height: Platform.OS === "android" ? 65 : 96,
          paddingBottom: tokens.space["10"],
          paddingTop: tokens.space["4"],
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <House color={color} size={iconSize} />,
        }}
      />
      <Screen
        name="homeee"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Tag color={color} size={iconSize} />,
        }}
      />
      <Screen
        name="homeeee"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <SignOut color={"#E07878"} size={iconSize} />
          ),
        }}
      />
    </Navigator>
  );
}
