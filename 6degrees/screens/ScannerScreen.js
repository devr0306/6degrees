import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/scanner-styles";

const ScannerScreen = ({ navigation }) => {
  return (
    <View style={styles.scannerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Show QR Screen")}>
        <Text>Show QR Code</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Scan QR Screen")}>
        <Text>Scan QR Code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScannerScreen;
