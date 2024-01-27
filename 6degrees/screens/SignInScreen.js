import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/signin-styles";

const SignInScreen = ({ navigation }) => {
  const user = useState({});
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
      <TextInput
        placeholder="Email"
        value={user.email}
        onChangeText={(text) => {
          user.email = text;
        }}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry={true}
        value={user.password}
        onChangeText={(text) => {
          user.password = text;
        }}
      />

      <TouchableOpacity>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;
