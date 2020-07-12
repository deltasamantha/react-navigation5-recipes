import React, {useCallback} from "react";
import {View, Text, Button, ImageBackground, Alert} from "react-native";
import {styles} from "./HomeScreen.styles";
import {getRandomInt} from "../../util/AppUtil";
import {useFocusEffect} from "@react-navigation/native";

export default function HomeScreen({navigation}) {
  useFocusEffect(
    useCallback(() => {
      Alert.alert("Title", "Get focused");
      return () => {
        Alert.alert("Title", "Get disapeared");
      };
    }, []),
  );

  const navigateToProfile = () => {
    const itemId = getRandomInt(100);
    navigation.navigate("Profile", {id: itemId, itemName: `Item ${itemId}`});
  };

  const openModal = () => {
    navigation.navigate("Modal");
  };

  const openBottomTab = () => {
    navigation.navigate("Tab");
  };

  const openTopTab = () => {
    navigation.navigate("TopTab");
  };

  const BACKGROUND = require("../../assets/images/Background.png");

  return (
    <ImageBackground source={BACKGROUND} style={styles.rootContainer}>
      <Text>Home</Text>
      <Button title="Profile" onPress={navigateToProfile} />
      <Button title="Show modal" onPress={openModal} />
      <Button title="Bottom Tab" onPress={openBottomTab} />
      <Button title="Top Tab" onPress={openTopTab} />
    </ImageBackground>
  );
}
