import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		borderRadius: 25,
		height: 50,
		backgroundColor: "#fff",
		width: "80%",
		alignItems: "center",
		justifyContent: "space-evenly",
		paddingHorizontal: 10,
	},
	input: {
		fontSize: 22,
		width: "60%",
		margin: 10,
	},
	mainContainer: {
		flexDirection: "row",
	},
	microphone: {
		marginLeft: 10,
		marginBottom: 10,
		height: 60,
		width: 60,
		borderRadius: 30,
		backgroundColor: Colors.light.tint,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default styles;
