import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/welcome-styles";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.welcomeContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Sign In Screen")}>
        <Text>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Sign Up Screen")}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
