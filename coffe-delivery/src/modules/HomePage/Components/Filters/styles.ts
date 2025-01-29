import { StyleSheet } from "react-native";
import { THEME } from "../../../../theme";

export const styles = StyleSheet.create({
  title: {
    color: THEME.COLORS.BASE.GRAY_200,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  containerFilters: {
    flexDirection: "row",
    gap: 8,
  },
});
