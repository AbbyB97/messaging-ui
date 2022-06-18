import { Flex, Image, Text } from "@chakra-ui/react";
import noChat from "images/no-chat.png";

const NoChatsOpen = () => {
  return (
    <Flex direction="column" my="auto" align="center">
      <Image src={noChat} h="250px" w="250px" alt="Dan Abramov" />
      <Text fontSize="sm" textAlign="center" color="gray.500">
        Head over to the conversations pane on the left to get started.
      </Text>
    </Flex>
  );
};

export default NoChatsOpen;
