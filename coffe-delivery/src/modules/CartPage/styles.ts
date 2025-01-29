import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BASE.WHITE,
    paddingVertical: 20,
    // gap: 10,
  },
  header: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    backgroundColor: THEME.COLORS.BASE.WHITE,
    borderBottomWidth: 2,
    borderBottomColor: THEME.COLORS.BASE.GRAY_700,
    marginTop: 20,
  },
  return: {
    position: "absolute",
    top: 14,
    left: 30,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: THEME.COLORS.BASE.GRAY_200,
  },
  footer: {
    height: 160,
    gap: 20,
    padding: 32,
    backgroundColor: THEME.COLORS.BASE.WHITE,
  },
  shadow: {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: -40 },
  },
});
