import * as React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CatListItem from "../components/ChatListItem";
import ContactItem from "../components/ContactItem";
import NewMessageButton from "../components/NewMessageButton";
import { View } from "../components/Themed";
import ChatRooms from "../data/ChatRooms";

export default function ContactScreen() {
	return (
		<View style={styles.container}>
			<FlatList
				style={{ width: "100%" }}
				data={ChatRooms}
				renderItem={({ item }) => <ContactItem chatRoom={item} />}
				keyExtractor={(item) => `${item.id}`}
			/>
			{/* <NewMessageButton /> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
});
