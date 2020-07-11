import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import ModalScreen from "../screens/ModalScreen/ModalScreen";
import {useStore} from "../stores/StoreContext";
import {useObserver} from "mobx-react-lite";
import MainNavigator from "./MainNavigator";

export type RootStackParamList = {
  Main: undefined;
  Modal: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const {authStore} = useStore();

  useEffect(() => {
    authStore.initAsyncStorage();
  }, []);

  return useObserver(() => {
    if (!authStore.initiated) {
      return <SplashScreen />;
    }
    return (
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          mode="modal">
          <RootStack.Screen name="Main" component={MainNavigator} />
          <RootStack.Screen name="Modal" component={ModalScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  });
}
