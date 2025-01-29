import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.COLORS.PRODUCT.PURPLE_DARK,
  },
  circle: {
    width: 0,
    height: 0,
    backgroundColor: THEME.COLORS.PRODUCT.PURPLE,
    borderRadius: 999,
    position: "absolute",
  },
  logo: {
    opacity: 0,
    flexDirection: "row",
    marginRight: 15,
  },
});
