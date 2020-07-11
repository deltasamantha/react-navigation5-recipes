import React from "react";
import {View, Text, Button} from "react-native";
import {styles} from "./ProfileScreen.styles";
import {useStore} from "../../stores/StoreContext";
import {getRandomInt, getRandomColor} from "../../util/AppUtil";

export default function ProfileScreen({route, navigation}) {
  const {authStore} = useStore();

  const {id, itemName} = route.params;

  const logOutHandler = () => {
    authStore.logout();
  };

  const navigateToProfile = () => {
    const itemId = getRandomInt(100);
    navigation.push("Profile", {id: itemId, itemName: `Item ${itemId}`});
  };

  const navigateToHome = () => {
    navigation.popToTop();
  };

  const updateParams = () => {
    const itemId = getRandomInt(10000);
    const color = getRandomColor();
    navigation.setParams({id: itemId});
    navigation.setParams({itemName: "Hi baby"});
    navigation.setOptions({
      title: `Updated! ${itemId}`,
      headerStyle: {
        backgroundColor: color,
      },
    });
  };

  const goToProfileDetail = () => {
    navigation.navigate("ProfileDetailScreen", {name: "Samantha"});
  };

  return (
    <View style={styles.rootContainer}>
      <View>
        <Text style={{fontSize: 23, color: "red"}}>{`Id is: ${id}`}</Text>
        <Text style={{fontSize: 20, color: "green"}}>{`Item is: ${itemName}`}</Text>
      </View>
      <Button title="Go profile again" onPress={navigateToProfile} />
      <Button title="Go home" onPress={navigateToHome} />
      <Button title="Log out" onPress={logOutHandler} />
      <Button title="Update params" onPress={updateParams} />
      <Button title="Go to profile detail" onPress={goToProfileDetail} />
    </View>
  );
}
