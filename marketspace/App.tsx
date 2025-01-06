import { StatusBar, View } from "react-native";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import {
  useFonts,
  Karla_700Bold,
  Karla_400Regular,
} from "@expo-google-fonts/karla";
import { Loading } from "./src/components/Loading";
import { config } from "./config/gluestack-ui.config";
import { Routes } from "@routes/index";
import { AuthContextProvider } from "./src/context/AuthContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_700Bold, Karla_400Regular });

  return (
    <GluestackUIProvider config={config}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          <AuthContextProvider>
            {fontsLoaded ? <Routes /> : <Loading />}
          </AuthContextProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </GluestackUIProvider>
  );
}
