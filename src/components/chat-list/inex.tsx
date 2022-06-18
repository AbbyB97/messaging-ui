import { VStack, Divider } from "@chakra-ui/react";
import ChatListHeader from "widgets/chat-list-header";
import UserList from "widgets/user-list";

const ChatList = () => {
  return (
    <VStack ml="5px" my="1.5rem" minW="350px" maxH="800px">
      <ChatListHeader />
      <Divider />
      <UserList />
    </VStack>
  );
};

export default ChatList;
