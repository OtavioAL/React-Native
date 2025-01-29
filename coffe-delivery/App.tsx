import { StatusBar, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Routes } from "./src/routes";
import { THEME } from "./src/theme";
import { CartProvider } from "./src/context/CartContext";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CartProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor={THEME.COLORS.BASE.GRAY_100}
          translucent
        />
        <Routes />
      </CartProvider>
    </GestureHandlerRootView>
  );
}
