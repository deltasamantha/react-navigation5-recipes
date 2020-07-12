import React from "react";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import SettingsTab from "../screens/SettingsTab/SettingsTab";
import SalesTab from "../screens/SalesTab/SalesTab";

type TopTabNavigatorOptions = {
  SalesTop: undefined;
  SettingsTop: undefined;
};

const TopTab = createMaterialTopTabNavigator<TopTabNavigatorOptions>();

export default function TopTabNavigator() {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
      initialRouteName="SettingsTop">
      <TopTab.Screen name="SalesTop" component={SalesTab} />
      <TopTab.Screen name="SettingsTop" component={SettingsTab} />
    </TopTab.Navigator>
  );
}
