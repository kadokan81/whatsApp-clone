import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./style";
import { FontAwesome } from "@expo/vector-icons";

const InputBox = () => {
	const [message, setMessage] = React.useState("");

	const onMicrophonPress = () => {
		console.warn("OnMicrophonerPress");
	};
	const onSendPress = () => {
		console.warn("On Send Press", message);
		setMessage("");
	};

	const onPress = () => {
		if (!message) {
			onMicrophonPress();
		} else {
			onSendPress();
		}
	};
	return (
		<View style={styles.mainContainer}>
			<View style={styles.inputContainer}>
				<FontAwesome name='smile-o' size={30} color='gray' />
				<TextInput
					placeholder={"Type a message"}
					multiline
					style={styles.input}
					defaultValue={message}
					onChangeText={(message) => setMessage(message)}
				/>
				<FontAwesome
					style={{ marginRight: 10 }}
					name='paperclip'
					size={30}
					color='gray'
					y
				/>
				{!message && (
					<FontAwesome name='camera' size={30} color='gray' />
				)}
			</View>
			<TouchableOpacity onPress={onPress}>
				<View style={styles.microphone}>
					{!message ? (
						<FontAwesome
							name='microphone'
							size={30}
							color='white'
						/>
					) : (
						<FontAwesome
							name='send-o'
							size={30}
							color='white'
							style={{ marginRight: 5 }}
						/>
					)}
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default InputBox;
