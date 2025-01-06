import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { gluestackUIConfig } from "../../config/gluestack-ui.config";

import { Platform } from "react-native";
import { House, SignOut, Tag } from "phosphor-react-native";
import { Home } from "@screens/home";
import { MyAds } from "@screens/myAds";
import { AdDetails } from "@screens/adDetails";
import { AdCreated } from "@screens/adCreated";
import { AdPreview } from "@screens/adPreview";
import { DetailsMyAd } from "@screens/detailsMyAd";

type AppRoutes = {
  home: undefined;
  myads: undefined;
  homeeee: undefined;
  adDetails: { adId: string };
  adCreated: undefined;
  adPreview: undefined;
  detailsMyAd: undefined;
  // adDetails: undefined;
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
        name="myads"
        component={MyAds}
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

      <Screen
        name="adDetails"
        component={AdDetails}
        options={{
          tabBarButton: () => null,
          // sceneStyle: { display: "none" },
          tabBarItemStyle: { display: "none" },
          tabBarStyle: { display: "none" },
        }}
      />

      <Screen
        name="adCreated"
        component={AdCreated}
        options={{
          tabBarButton: () => null,
          // sceneStyle: { display: "none" },
          tabBarItemStyle: { display: "none" },
          tabBarStyle: { display: "none" },
        }}
      />
      <Screen
        name="adPreview"
        component={AdPreview}
        options={{
          tabBarButton: () => null,
          // sceneStyle: { display: "none" },
          tabBarItemStyle: { display: "none" },
          tabBarStyle: { display: "none" },
        }}
      />
      <Screen
        name="detailsMyAd"
        component={DetailsMyAd}
        options={{
          tabBarButton: () => null,
          // sceneStyle: { display: "none" },
          tabBarItemStyle: { display: "none" },
          tabBarStyle: { display: "none" },
        }}
      />
    </Navigator>
  );
}
