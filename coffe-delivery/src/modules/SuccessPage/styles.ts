import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: THEME.COLORS.PRODUCT.YELLOW_DARK,
    marginBottom: 12,
  },
  message: {
    fontSize: 14,
    fontWeight: "400",
    color: THEME.COLORS.BASE.GRAY_200,
  },
});
