import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 36,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 6,
    borderWidth: 2,
    padding: 16,
    borderColor: THEME.COLORS.BASE.GRAY_700,
    backgroundColor: THEME.COLORS.BASE.GRAY_800,
    minHeight: 120,
  },
  content: {
    flex: 1,
    gap: 8,
    paddingLeft: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: THEME.COLORS.BASE.GRAY_200,
  },
  description: {
    fontSize: 12,
    fontWeight: "400",
    color: THEME.COLORS.BASE.GRAY_400,
  },
});
