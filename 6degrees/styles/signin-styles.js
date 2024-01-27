import { StyleSheet } from "react-native";
import colors from "../colors";

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  title: {
    marginTop: 150,
    fontSize: 28,
    fontWeight: "700",
  },
  input: {
    height: 40,
    margin: 12,
    width: "70%",
    borderRadius: 30,
    padding: 10,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  submitButton: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginVertical: 10,
    backgroundColor: colors.primary,
    borderRadius: 30,
  },
  submitButtonText: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.white,
  },
});

export default styles;
