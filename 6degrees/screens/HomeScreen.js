import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import GraphScreen from "./GraphScreen";
import SettingsScreen from "./SettingsScreen";
import FeedScreen from "./FeedScreen";
import ScannerScreen from "./ScannerScreen";

const HomeScreen = ({ navigation, route }) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Graph" component={GraphScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Scanner" component={ScannerScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
