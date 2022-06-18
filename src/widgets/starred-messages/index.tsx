import {
  Box,
  Flex,
  HStack,
  Icon,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import React from "react";
import { AiFillStar,  AiOutlineStar } from "react-icons/ai";
import { addStarredText, removeStarredText } from "redux/chatBoxSlice";

const StarredMessages = () => {
  const starredTexts = useAppSelector((state) => state.userChatStore.starred);
  const dispatch = useAppDispatch();

  return (
    <VStack w="80%" h="80%">
      <Box w="full" mt="auto">
        <VStack
          align="end"
          maxH="600px"
          overflowY="auto"
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
        >
          {starredTexts.map((text) => (
            <Popover trigger="hover">
              <PopoverTrigger>
                {/* <Flex justify="right"> */}
                <Flex
                  maxW="80%"
                  w="fit-content"
                  rounded="xl"
                  mx="1.5px"
                  p="1rem"
                  bg="#E6F7FF"
                  my="0.5rem"
                >
                  <Text wordBreak="break-word">{text}</Text>
                </Flex>
                {/* </Flex> */}
              </PopoverTrigger>
              <PopoverContent w="150px">
                <PopoverBody>
                  <HStack justify="center">
                    <Icon
                      onClick={() =>
                        starredTexts?.includes(text)
                          ? dispatch(removeStarredText(text))
                          : dispatch(addStarredText(text))
                      }
                      as={
                        starredTexts?.includes(text)
                          ? AiFillStar
                          : AiOutlineStar
                      }
                    />
                  </HStack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          ))}
        </VStack>
      </Box>
    </VStack>
  );
};

export default StarredMessages;
