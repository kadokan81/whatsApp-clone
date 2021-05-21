import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
const styles = StyleSheet.create({
	containet: {
		position: "absolute",
		bottom: 20,
		right: 20,
		width: 70,
		height: 70,
		borderRadius: 35,
		backgroundColor: Colors.light.tint,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default styles;
