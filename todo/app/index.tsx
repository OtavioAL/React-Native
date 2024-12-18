import { StatusBar, Text, View } from "react-native";
import Home from "./screens/Home";

export default function Index() {
  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      <Home />
    </>
  );
}
