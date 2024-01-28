import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/scanner-styles";

const ScannerScreen = ({ navigation }) => {
  return (
    <View style={styles.scannerContainer}>
      <TouchableOpacity
        style={styles.scannerButton}
        onPress={() => navigation.navigate("Show QR Screen")}
      >
        <Text style={styles.scannerButtonText}>Show QR Code</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.scannerButton}
        onPress={() => navigation.navigate("Scan QR Screen")}
      >
        <Text style={styles.scannerButtonText}>Scan QR Code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScannerScreen;
