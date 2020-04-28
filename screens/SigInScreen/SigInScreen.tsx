import React from "react";
import {View, Text, Button} from "react-native";
import {styles} from "./SigInScreen.styles";
import {useStore} from "../../stores/StoreContext";
import {useNavigation} from "@react-navigation/native";

export default function SigInScreen() {
  const {authStore} = useStore();
  const navigation = useNavigation();

  const submitForm = () => {
    authStore.authenticate();
  };

  const onPressSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.rootContainer}>
      <Text>Auth</Text>
      <Button title="Sign In" onPress={submitForm} />
      <Button title="Sign Up" onPress={onPressSignUp} />
    </View>
  );
}
