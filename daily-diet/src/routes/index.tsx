import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { View } from "react-native";
import theme from "../theme";

export default function Routes() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.gray_100 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
