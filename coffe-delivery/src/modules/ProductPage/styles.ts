import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  header: {
    flex: 3,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: THEME.COLORS.BASE.GRAY_100,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: THEME.COLORS.BASE.GRAY_300,
    marginBottom: 16,
  },
  footer: {
    flex: 1,
    gap: 26,
    paddingHorizontal: 32,
    paddingVertical: 48,
    backgroundColor: THEME.COLORS.BASE.GRAY_900,
  },
  contentFooter: {
    gap: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: THEME.COLORS.BASE.GRAY_700,
    borderRadius: 6,
    padding: 12,
  },
  textAmount: {
    fontSize: 16,
    fontWeight: "400",
    color: THEME.COLORS.BASE.GRAY_100,
  },
});
