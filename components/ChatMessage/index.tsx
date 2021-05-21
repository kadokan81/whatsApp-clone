import moment from "moment";
import * as React from "react";
import { Text, View } from "react-native";
import { Message } from "../../types";
import styles from "./style";

export type ChatMessageProps = {
	message: Message;
};

const ChatMessage = (props: ChatMessageProps) => {
	const { message } = props;
	function isMyMessage() {
		return message.user.id === "u1";
	}

	return (
		<View style={styles.container}>
			<View
				style={[
					styles.containerMessage,
					{
						marginRight: isMyMessage() ? 0 : 50,
						marginLeft: isMyMessage() ? 50 : 0,
						backgroundColor: isMyMessage() ? "#9fe6a0" : "white",
					},
				]}>
				{!isMyMessage() && (
					<Text style={{ color: "blue", fontSize: 15 }}>
						{message.user.name}
					</Text>
				)}

				<Text>{message.content}</Text>
				<Text style={{ alignSelf: "flex-end", color: "gray" }}>
					{moment(message.createdAt).fromNow()}
				</Text>
			</View>
		</View>
	);
};

export default ChatMessage;
