import React from "react";
import {View, Text, Button} from "react-native";
import {styles} from "./ProfileScreen.styles";
import {useStore} from "../../stores/StoreContext";

export default function ProfileScreen() {
  const {authStore} = useStore();

  const logOutHandler = () => {
    authStore.logout();
  };

  return (
    <View style={styles.rootContainer}>
      <Text>Profile</Text>
      <Button title="Log out" onPress={logOutHandler} />
    </View>
  );
}
