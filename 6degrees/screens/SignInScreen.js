import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/signin-styles";

import { firebase } from "../firebase/config";

const SignInScreen = ({ navigation }) => {
  const loginPress = () => {
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(user.email, user.password)
    //   .then((response) => {
    //     const uid = response.user.uid;
    //     const usersRef = firebase.firestore().collection("users");
    //     usersRef
    //       .doc(uid)
    //       .get()
    //       .then((firestoreDocument) => {
    //         if (!firestoreDocument.exists) {
    //           alert("User does not exist anymore.");
    //           return;
    //         }
    //         const user = firestoreDocument.data();
    //         navigation.navigate("Home Screen", { user });
    //       })
    //       .catch((error) => {
    //         alert(error);
    //       });
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });
    navigation.navigate("Home Screen");
  };
  const user = useState({});
  return (
    <View style={{ flex: 1, height: "100%", alignItems: "center" }}>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={user.email}
          onChangeText={(text) => {
            user.email = text;
          }}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          value={user.password}
          onChangeText={(text) => {
            user.password = text;
          }}
        />

        <TouchableOpacity style={styles.submitButton} onPress={loginPress}>
          <Text style={styles.submitButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;
