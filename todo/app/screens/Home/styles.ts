import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    marginTop: 30,
  },
  container: {
    flex: 1,
    // padding: 16,
    backgroundColor: colors.gray[700],
  },
  header: {
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginTop: 40,
  },
  image: {
    width: 110,
    height: 32,
    objectFit: "cover",
  },
  content: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.gray[600],
  },
  containerInput: {
    width: "100%",
    marginTop: -40,
    flexDirection: "row",
    gap: 10,
  },
  button: {
    backgroundColor: colors.blueDark,
    padding: 4,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    width: 52,
    height: 52,
  },
  textButton: {
    color: colors.gray[100],
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 20,
    padding: 4,
    borderColor: colors.gray[100],
  },

  headerInformation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[400],
    marginTop: 40,
    paddingBottom: 15,
  },

  containerInformationTask: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  taskCreated: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: "bold",
  },
  taskFinished: {
    color: colors.purple,
    fontSize: 14,
    fontWeight: "bold",
  },
  containerTextQuantity: {
    backgroundColor: colors.gray[400],
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  textQuantity: {
    color: colors.gray[100],
    fontSize: 14,
  },
  containerListEmpty: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  textListEmpty: {
    fontSize: 14,
  },
});

export default styles;
