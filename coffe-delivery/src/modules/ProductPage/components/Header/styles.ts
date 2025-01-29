import { StyleSheet } from "react-native";
import { THEME } from "../../../../theme";

export const styles = StyleSheet.create({
  header: {
    flex: 3,
    paddingVertical: 16,
    paddingHorizontal: 32,
    paddingTop: 40,
    backgroundColor: THEME.COLORS.BASE.GRAY_100,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: THEME.COLORS.BASE.GRAY_300,
    marginBottom: 16,
  },
});
