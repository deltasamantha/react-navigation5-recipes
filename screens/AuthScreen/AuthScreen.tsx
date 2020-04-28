import React from "react";
import {View, Text, Button} from "react-native";
import {styles} from "./AuthScreen.styles";

export default function AuthScreen({navigation}) {
  const navigateToProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.rootContainer}>
      <Text>Auth</Text>
      <Button title="Login" onPress={navigateToProfile} />
    </View>
  );
}
