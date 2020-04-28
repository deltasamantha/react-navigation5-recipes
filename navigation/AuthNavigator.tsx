import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import SigInScreen from "../screens/SigInScreen/SigInScreen";
import SigUpScreen from "../screens/SigUpScreen/SigUpScreen";

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SigInScreen} />
      <AuthStack.Screen name="SignUp" component={SigUpScreen} />
    </AuthStack.Navigator>
  );
}
