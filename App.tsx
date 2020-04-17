/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {View, Text, StatusBar} from "react-native";
import {styles} from "./App.styles";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.rootContainer}>
        <Text>Hi React Navigation 5.0</Text>
      </View>
    </>
  );
};

export default App;
