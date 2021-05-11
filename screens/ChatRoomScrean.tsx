import * as React from "react";
import { Image, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

const ChatRoomScrean = () => {
  const route = useRoute();
  // console.log(route.params);

  return (
    <View>
      <Image
        style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
        source={{ uri: route.params.url }}
      />
      <Text>{route.params.name}</Text>
    </View>
  );
};

export default ChatRoomScrean;
