import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginTop: 40,
  },
  image: {
    width: 110,
    height: 32,
    objectFit: "cover",
  },
});

export default styles;
