import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    height: 262,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 36,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 6,
    borderColor: THEME.COLORS.BASE.GRAY_700,
    backgroundColor: THEME.COLORS.BASE.GRAY_800,
    borderWidth: 2,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: THEME.COLORS.BASE.GRAY_200,
  },
  description: {
    fontSize: 12,
    fontWeight: "400",
    color: THEME.COLORS.BASE.GRAY_400,
    textAlign: "center",
  },
  valuePrice: {
    fontSize: 24,
    color: THEME.COLORS.PRODUCT.YELLOW_DARK,
    fontWeight: "bold",
  },
  labelPrice: {
    fontSize: 14,
    fontWeight: "400",
    color: THEME.COLORS.PRODUCT.YELLOW_DARK,
  },
});
