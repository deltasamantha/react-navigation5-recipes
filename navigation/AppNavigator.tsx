import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import ProfileDetailScreen from "../screens/ProfileDetailScreen/ProfileDetailScreen";

export type AppStackParamList = {
  Home: undefined;
  Profile: {id: number; itemName: string};
  ProfileDetailScreen: {name: string};
};

const AppStack = createStackNavigator<AppStackParamList>();

export default function AppNavigator() {
  return (
    <AppStack.Navigator screenOptions={
      {
        headerBackTitleVisible: false,
        headerTintColor: "red",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }}>
      <AppStack.Screen name="Home" component={HomeScreen} options={{
        title: "House 😊",
        headerShown:false,
        headerTintColor: "blue",
        headerStyle: {
          backgroundColor: "green"
        },
      }} />
      <AppStack.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ id: 0, itemName: `Item ${0} XX` }}
        options={{
          headerTitleStyle: {
          fontWeight: "normal"
          },
          headerTransparent: true
        }}
      />
      <AppStack.Screen name="ProfileDetailScreen"
        component={ProfileDetailScreen}
        options={({ route }) => ({ title: route.params?.name || "Empty" })}
      />
    </AppStack.Navigator>
  );
}
