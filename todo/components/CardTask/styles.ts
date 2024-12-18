import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    backgroundColor: colors.gray[400],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    width: "100%",
    padding: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: colors.gray[100],
    flex: 2,
  },
  taskFinished: {
    textDecorationLine: "line-through",
    color: colors.gray[300],
  },
  buttonCompleteTask: {
    // flex: 1,
  },
  buttonRemoveTask: {
    // flex: 1,
  },
});

export default styles;
