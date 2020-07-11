/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import "react-native-gesture-handler";
import React from "react";
import {StatusBar, ImageBackground} from "react-native";
import RootNavigator from "./navigation/RootNavigator";

const App = () => {
  const BACKGROUND = require("./assets/images/Background.png");
  return (
    <ImageBackground source={BACKGROUND} style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
    </ImageBackground>
  );
};

export default App;
