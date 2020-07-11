import React, {useEffect} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {useStore} from "../stores/StoreContext";
import {useObserver} from "mobx-react-lite";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";

export type MainStackParamList = {
  App: undefined;
  Auth: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

export default function MainNavigator() {
  const {authStore} = useStore();

  useEffect(() => {
    authStore.initAsyncStorage();
  }, []);

  return useObserver(() => {
    return (
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!authStore.isLoggedIn ? (
          <>
            <MainStack.Screen
              name="Auth"
              component={AuthNavigator}
              options={{
                animationTypeForReplace: !authStore.isLoggedIn ? "pop" : "push",
              }}
            />
          </>
        ) : (
          <>
            <MainStack.Screen name="App" component={AppNavigator} />
          </>
        )}
      </MainStack.Navigator>
    );
  });
}
