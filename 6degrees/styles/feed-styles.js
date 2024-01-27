import { StyleSheet } from "react-native";
import colors from "../colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 30,
    shadowOffset: {
      height: 5,
      width: 2,
    },
    shadowOpacity: 0.5,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  text: {
    fontWeight: "500",
    fontSize: 14,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 3,
  },
  priceAndLocationContainer: {
    marginTop: 2,
    flexDirection: "row",
  },
  priceAndLocation: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 16,
  },
  date: {
    color: colors.primary,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
  },
  title: {
    color: colors.lightBlue,
    fontWeight: "bold",
    fontSize: 22,
  },
});

export default styles;
