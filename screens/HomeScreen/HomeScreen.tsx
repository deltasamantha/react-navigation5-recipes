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

  const BACKGROUND = require("../../assets/images/Background.png");

  return (
    <ImageBackground source={BACKGROUND} style={styles.rootContainer}>
      <Text>Home</Text>
      <Button title="Profile" onPress={navigateToProfile} />
    </ImageBackground>
  );
}
