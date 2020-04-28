import React from "react";
import {View, Text, Button} from "react-native";
import {styles} from "./AuthScreen.styles";
import {useStore} from "../../stores/StoreContext";

export default function AuthScreen({navigation}) {
  const {authStore} = useStore();
  const submitForm = () => {
    authStore.authenticate();
  };

  return (
    <View style={styles.rootContainer}>
      <Text>Auth</Text>
      <Button title="Login" onPress={submitForm} />
    </View>
  );
}
