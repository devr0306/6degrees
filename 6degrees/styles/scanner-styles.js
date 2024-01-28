import { StyleSheet } from "react-native";
import colors from "../colors";

const styles = StyleSheet.create({
  scannerContainer: {
    marginVertical: 300,
  },
  scannerButton: {
    marginHorizontal: "10%",
    width: "80%",
    paddingVertical: 20,
    marginBottom: 10,
    backgroundColor: colors.primary,
    borderRadius: 30,
  },
  scannerButtonText: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.white,
    textAlign: "center",
  },
});

export default styles;
