import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useAppSelector } from "hooks/reduxHooks";

interface ChatHeaderProps {
  tabSwitch: number;
  setTabSwitch: (arg0: number) => void;
}

const ChatHeader = ({ tabSwitch, setTabSwitch }: ChatHeaderProps) => {
  const activeChat = useAppSelector((state) => state.userChatStore.activeChat);

  return (
    <Flex align="center" w="full" my="1rem">
      <Avatar boxSize={10} name={activeChat?.name} />
      <Box w="300px">
        <Text textAlign="center" color="gray.600" fontWeight="semibold">
          {activeChat?.name}
        </Text>
      </Box>
      <Box mx="1.5rem">
        <Text
          borderBottom={tabSwitch === 0 ? "1px" : 0}
          borderBottomColor="gray.400"
          color="gray.600"
          _hover={{ cursor: "pointer" }}
          onClick={() => setTabSwitch(0)}
        >
          Chat
        </Text>
      </Box>
      <Box mx="1.5rem">
        <Text
          borderBottom={tabSwitch === 1 ? "1px" : 0}
          borderBottomColor="gray.400"
          color="gray.600"
          onClick={() => setTabSwitch(1)}
          _hover={{ cursor: "pointer" }}
        >
          Starred Messages
        </Text>
      </Box>
    </Flex>
  );
};

export default ChatHeader;
