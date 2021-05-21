import React from "react";
import { Image, Text, View } from "react-native";
import { ChatRoom, User } from "../../types";
import styles from "./style";
import moment from "moment";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export type ChatListItemProps = {
	chatRoom: ChatRoom;
};

const ContactItem = (props: ChatListItemProps) => {
	const { chatRoom } = props;
	const navigation = useNavigation();
	const user = chatRoom.users[1];
	return (
		<TouchableWithoutFeedback
			onPress={() =>
				navigation.navigate("chatRoom", {
					id: chatRoom.id,
					name: user.name,
					url: user.imageUri,
				})
			}>
			<View style={styles.container}>
				<View style={styles.lefContainer}>
					<Image
						source={{ uri: user.imageUri }}
						style={styles.avatar}
					/>
					<View style={styles.midContainer}>
						<Text style={styles.username}>{user.name}</Text>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ContactItem;

{
	/* <View style={styles.container}>
<View style={styles.lefContainer}>
  <Image source={{ uri: otherUser.imageUri }} style={styles.avatar}/>

  <View style={styles.midContainer}>
    <Text style={styles.username}>{otherUser.name}</Text>
    <Text
      numberOfLines={2}
      style={styles.lastMessage}>
      {chatRoom.lastMessage
        ? `${chatRoom.lastMessage.user.name}: ${chatRoom.lastMessage.content}`
        : ""}
    </Text>
  </View>

</View>

<Text style={styles.time}>
  {chatRoom.lastMessage && moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
</Text>
</View> */
}
