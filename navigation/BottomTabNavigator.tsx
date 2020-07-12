import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import SettingsTab from "../screens/SettingsTab/SettingsTab";
import SalesTab from "../screens/SalesTab/SalesTab";
import Ionicons from "react-native-vector-icons/Ionicons";

type BottomTabNavigatorOptions = {
  Sales: undefined;
  Settings: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabNavigatorOptions>();
// const BottomTab = createMaterialTopTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        // tabBarIcon: ({focused, color, size}) => {
        //   let iconName;
        //   if (route.name === "Sales") {
        //     iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
        //   } else if (route.name === "Settings") {
        //     iconName = focused ? "ios-list-box" : "ios-list";
        //   }
        //   // You can return any component that you like here!
        //   return <Ionicons name={iconName} size={size} color={color} />;
        // },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}>
      <BottomTab.Screen name="Sales" component={SalesTab} />
      <BottomTab.Screen name="Settings" component={SettingsTab} />
    </BottomTab.Navigator>
  );
}
