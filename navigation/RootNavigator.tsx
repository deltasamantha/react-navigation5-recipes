import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import SplashScreen from "../screens/SplashScreen/SplashScreen";

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} options={{title: "House"}} />
        <RootStack.Screen name="Profile" component={ProfileScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
