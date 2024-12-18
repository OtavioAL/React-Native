import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.gray[500],
    borderRadius: 6,
    borderColor: colors.gray[300],
    padding: 16,
    fontSize: 16,
    flex: 1,
    color: colors.gray[100],
  },
});

export default styles;
