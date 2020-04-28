import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import AppNavigator from "./AppNavigator";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import AuthScreen from "../screens/AuthScreen/AuthScreen";

export type RootStackParamList = {
  App: undefined;
  Profile: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="App" component={AppNavigator} />
        <RootStack.Screen name="Profile" component={ProfileScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
