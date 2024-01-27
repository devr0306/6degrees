import { StyleSheet } from "react-native";
import colors from "../colors";

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 400,
  },
  welcomeButton: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: colors.primary,
    borderRadius: 30,
  },
  welcomeButtonText: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.white,
  },
});

export default styles;
