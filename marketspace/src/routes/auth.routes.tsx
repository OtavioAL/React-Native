import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { SignInPage } from "@screens/sigin";
import { SignUpPage } from "@screens/sigup";
const { Navigator, Screen } = createNativeStackNavigator();

type AuthRoutes = {
  signIn: undefined;
  signUp: undefined;
};
export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="signIn">
      <Screen name="signIn" component={SignInPage} />
      <Screen name="signUp" component={SignUpPage} />
    </Navigator>
  );
}
