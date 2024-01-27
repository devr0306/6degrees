import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./screens/WelcomeScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import ShowQRScreen from "./screens/ShowQRScreen";
import ScanQRScreen from "./screens/ScanQRScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Welcome Screen"
          component={WelcomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Sign In Screen"
          component={SignInScreen}
          options={{ gestureEnabled: true }}
        />
        <Stack.Screen
          name="Sign Up Screen"
          component={SignUpScreen}
          options={{ gestureEnabled: true }}
        />
        <Stack.Screen
          name="Home Screen"
          component={HomeScreen}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="Show QR Screen"
          component={ShowQRScreen}
          options={{ gestureEnabled: true }}
        />
        <Stack.Screen
          name="Scan QR Screen"
          component={ScanQRScreen}
          options={{ gestureEnabled: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
