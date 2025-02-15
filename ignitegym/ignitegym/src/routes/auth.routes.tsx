import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { SignIn } from "@screens/sigin";
import { SignUp } from "@screens/sigup";
const { Navigator, Screen } = createNativeStackNavigator();

type AuthRoutes = {
  signIn: undefined;
  signUp: undefined;
};
export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={SignIn} />

      <Screen name="signUp" component={SignUp} />
    </Navigator>
  );
}
