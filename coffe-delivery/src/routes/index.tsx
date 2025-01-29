import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Splash } from "../screens/splash";
import { Home } from "../screens/home";
import { Cart } from "../screens/cart";
import { Product } from "../screens/product";
import { Success } from "../screens/success";

type RouteParams = {
  splash: undefined;
  home: undefined;
  product: {
    id: number;
  };
  cart: undefined;
  success: undefined;
};

export type RouteParamsList = NativeStackNavigationProp<RouteParams>;

const Stack = createNativeStackNavigator<RouteParams>();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="product" component={Product} />
        <Stack.Screen name="success" component={Success} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
