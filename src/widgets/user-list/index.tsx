import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { setActiveChat } from "redux/chatBoxSlice";

const UserList = () => {
  const dispatch = useAppDispatch();
  const userChats = useAppSelector((state) => state.userChatStore.userChats);

  return (
    <Box
      w="full"
      __css={{
        "&::-webkit-scrollbar": {
          w: "2",
        },
        "&::-webkit-scrollbar-track": {
          w: "6",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "10",
          bg: `gray.100`,
        },
      }}
      overflowY="auto"
      maxH="100vh"
    >
      {userChats?.map((user, i) => (
        <Flex
          _hover={{ cursor: "pointer" }}
          key={i}
          w="full"
          borderBottomColor="gray.100"
          borderBottomWidth="1px"
          alignItems="center"
          justifyContent="center"
          onClick={() => dispatch(setActiveChat(i))}
        >
          <Flex maxW="sm" w="full" bg="white" shadow="md" overflow="hidden">
            <Flex alignItems="center" px={2} py={3}>
              <Avatar boxSize={10} name={user.name} />
              <Box mx={3}>
                <Text color="gray.600">{user.name}</Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Box>
  );
};

export default UserList;
