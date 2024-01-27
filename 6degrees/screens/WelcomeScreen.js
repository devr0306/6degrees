import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/welcome-styles";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.title}>6degrees</Text>
      <TouchableOpacity
        style={styles.welcomeButton}
        onPress={() => navigation.navigate("Sign In Screen")}
      >
        <Text style={styles.welcomeButtonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.welcomeButton}
        onPress={() => navigation.navigate("Sign Up Screen")}
      >
        <Text style={styles.welcomeButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
