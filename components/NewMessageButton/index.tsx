import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./style";

export interface NewMessageButtonProps {}

const NewMessageButton: React.FC<NewMessageButtonProps> = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.containet}>
			<TouchableOpacity onPress={() => navigation.navigate("Contact")}>
				<Ionicons
					name='chatbox-ellipses-outline'
					size={35}
					color='white'
				/>
			</TouchableOpacity>
		</View>
	);
};

export default NewMessageButton;
