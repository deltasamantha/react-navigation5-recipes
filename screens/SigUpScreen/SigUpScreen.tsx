import React from "react";
import {View, Text, Button} from "react-native";
import {styles} from "./SigUpScreen.styles";
import {useStore} from "../../stores/StoreContext";

export default function SigInScreen({navigation}) {
  const {authStore} = useStore();
  const submitForm = () => {
    authStore.authenticate();
  };

  return (
    <View style={styles.rootContainer}>
      <Text>Auth</Text>
      <Button title="Sign Up" onPress={submitForm} />
    </View>
  );
}
