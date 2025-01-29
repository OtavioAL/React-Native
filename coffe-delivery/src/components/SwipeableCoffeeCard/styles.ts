import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    gap: 20,
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderBottomWidth: 2,
    borderBottomColor: THEME.COLORS.BASE.GRAY_700,
    backgroundColor: THEME.COLORS.BASE.WHITE,
  },
  backContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 32,
    height: "100%",
    backgroundColor: THEME.COLORS.FEEDBACKS.RED_LIGHT,
  },
});
