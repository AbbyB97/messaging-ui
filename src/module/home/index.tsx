import { Divider, Stack } from "@chakra-ui/react";
import ChatBox from "components/chat-box";
import ChatList from "components/chat-list/inex";

const HomeModule = () => {
  return (
    <>
      <Stack direction="row">
        <ChatList />
        <Divider h="90vh" orientation="vertical" />
        <ChatBox />
      </Stack>
    </>
  );
};

export default HomeModule;
