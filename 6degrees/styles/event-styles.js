import { StyleSheet } from "react-native";
import colors from "../colors";

const styles = StyleSheet.create({
  detailsContainer: {
    marginTop: 50,
    padding: 20,
    paddingHorizontal: 50,
  },
  date: {
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  details: {
    fontWeight: "bold",
    fontSize: 20,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceAndLocationContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "500",
    fontWeight: "bold",
  },
  descriptionContainer: {
    marginTop: 15,
  },
  icon: {
    marginRight: 5,
  },
  buttonContainer: {
    marginTop: 15,
  },
  backButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 50,
  },
  hostContainer: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    marginLeft: 10,
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  dateAndRSVPContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  signUpButton: {
    width: "90%",
    borderRadius: 30,
    backgroundColor: colors.primary,
    marginHorizontal: "5%",
    paddingVertical: 10,
  },
  signUpButtonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default styles;
