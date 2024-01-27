import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles/signin-styles";

// Import Firebase modules
import { app } from "../firebase/config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const SignInScreen = ({ navigation }) => {
  const [user, setUser] = useState({});

  const loginPress = () => {
    const auth = getAuth(app); // Initialize Auth
    const firestore = getFirestore(app); // Initialize Firestore

    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((response) => {
        console.log(response);
        const uid = response.user.uid;
        const usersRef = doc(firestore, "users", uid); // Reference to user document
        getDoc(usersRef)
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists()) {
              alert("User does not exist anymore.");
              return;
            }
            const userData = firestoreDocument.data();
            navigation.navigate("Home Screen", { user: userData });
          })
          .catch((error) => {
            alert(error.message);
          });
        })
      .catch((error) => {
        alert(error.message);
      });
  };

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
