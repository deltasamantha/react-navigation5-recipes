import React, {useState, useLayoutEffect} from "react";
import {View, Text, Button} from "react-native";
import {styles} from "./ProfileDetailScreen.styles";

export default function ProfileDetailScreen({route, navigation}) {
  const [count, setCount] = useState<number>(0);
  const {name} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={() => setCount(c => c + 1)} title="Update count" />,
    });
  }, [navigation]);

  return (
    <View style={styles.rootContainer}>
      <Text>Profile detail</Text>
      <Text>{name}</Text>
      <Text>Count: {count}</Text>
    </View>
  );
}
