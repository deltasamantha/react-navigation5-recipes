import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import AppNavigator from "./AppNavigator";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import AuthScreen from "../screens/AuthScreen/AuthScreen";
import {useStore} from "../stores/StoreContext";
import {useObserver} from "mobx-react-lite";

export type RootStackParamList = {
  App: undefined;
  Auth: undefined;
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
          }}>
          {!authStore.isLoggedIn ? (
            <>
              <RootStack.Screen
                name="Auth"
                component={AuthScreen}
                options={{
                  animationTypeForReplace: !authStore.isLoggedIn ? "pop" : "push",
                }}
              />
            </>
          ) : (
            <>
              <RootStack.Screen name="App" component={AppNavigator} />
            </>
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    );
  });
}
