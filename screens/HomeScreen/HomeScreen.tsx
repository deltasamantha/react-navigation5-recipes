import React from "react";
import {View, Text, Button} from "react-native";
import {styles} from "./HomeScreen.styles";

export default function HomeScreen({navigation}) {
  const navigateToProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.rootContainer}>
      <Text>Home</Text>
      <Button title="Profile" onPress={navigateToProfile} />
    </View>
  );
}
