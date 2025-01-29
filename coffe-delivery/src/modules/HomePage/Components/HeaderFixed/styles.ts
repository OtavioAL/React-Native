import { StyleSheet } from "react-native";
import { THEME } from "../../../../theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.BASE.GRAY_100,
    height: 0,
    paddingHorizontal: 32,
    paddingTop: 16,
    overflow: "hidden",
    zIndex: 1,
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
  BannerText: {
    color: THEME.COLORS.BASE.GRAY_100,
    fontSize: 20,
    fontWeight: "700",
  },
});
