import { VStack } from "@chakra-ui/react";
import { useAppSelector } from "hooks/reduxHooks";
import React, { useState } from "react";
import ChatHeader from "widgets/chat-box-header";
import NoChatsOpen from "widgets/no-chats-open";
import ActiveChat from "widgets/active-chat";
import StarredMessages from "widgets/starred-messages";

const ChatBox = () => {
  const activeChat = useAppSelector((state) => state.userChatStore.activeChat);
  const [tabSwitch, setTabSwitch] = useState(0);

  return (
    <VStack w="full">
      {activeChat ? (
        <>
          <ChatHeader setTabSwitch={setTabSwitch} tabSwitch={tabSwitch} />
          {tabSwitch === 0 ? <ActiveChat /> : <StarredMessages />}
        </>
      ) : (
        <NoChatsOpen />
      )}
    </VStack>
  );
};

export default ChatBox;
