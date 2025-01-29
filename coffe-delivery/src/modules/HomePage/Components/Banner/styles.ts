import { StyleSheet } from "react-native";
import { THEME } from "../../../../theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.BASE.GRAY_100,
    height: 210,
    paddingHorizontal: 10,
    paddingTop: 16,
    width: "100%",
    overflow: "hidden",
    zIndex: 1,
    gap: 20,
  },
  geo: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  city: {
    color: THEME.COLORS.BASE.WHITE,
  },
  bannerText: {
    color: THEME.COLORS.BASE.WHITE,
    fontSize: 20,
    fontWeight: "700",
    width: "100%",
    maxWidth: 300,
  },
});
