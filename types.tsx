/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
	Root: undefined;
	NotFound: undefined;
	Contact: undefined;
	chatRoom: undefined;
};

export type MainTabParamList = {
	Camera: undefined;
	Chats: undefined;
	Status: undefined;
	Calls: undefined;
	chatRoom: undefined;
	Contact: undefined;
};

export type TabOneParamList = {
	TabOneScreen: undefined;
};

export type TabTwoParamList = {
	TabTwoScreen: undefined;
};
export type User = {
	id: String;
	name: String;
	imageUrl: String;
};
export type Message = {
	id: String;
	content: String;
	createdAt: String;
	user: User;
};
export type ChatRoom = {
	id: String;
	users: User[];
	lastMessage: Message;
};
