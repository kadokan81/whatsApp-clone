import * as React from "react";
import { FlatList, Image, ImageBackground, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import ChatMessage from "../components/ChatMessage";
import Chats from "../data/Chats";
import InputBox from "../components/InputBox";
import BG from "../assets/images/BG.png";

const ChatRoomScrean = () => {
	return (
		<ImageBackground style={{ width: "100%", height: "100%" }} source={BG}>
			<FlatList
				data={Chats.messages}
				renderItem={({ item }) => <ChatMessage message={item} />}
				inverted
			/>
			<InputBox />
		</ImageBackground>
	);
};

export default ChatRoomScrean;
