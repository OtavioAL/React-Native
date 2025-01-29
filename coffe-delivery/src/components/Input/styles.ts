import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.COLORS.BASE.GRAY_200,
    borderRadius: 4,
    paddingHorizontal: 8,
    gap: 8,
    width: "100%",
  },
});
