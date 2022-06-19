import {
  Box,
  Flex,
  FormControl,
  HStack,
  Icon,
  Input,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  AiFillStar,
  AiOutlineSend,
  AiOutlineShareAlt,
  AiOutlineStar,
} from "react-icons/ai";
import { RiDeleteBin2Line } from "react-icons/ri";
import {
  addStarredText,
  deleteText,
  removeStarredText,
  sendText,
} from "redux/chatBoxSlice";

type Inputs = {
  text: string;
};
const ActiveChat = () => {
  const activeChat = useAppSelector((state) => state.userChatStore.activeChat);
  const dispatch = useAppDispatch();
  const starredTexts = useAppSelector((state) => state.userChatStore.starred);
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    dispatch(sendText(data.text));
    reset();
  };

  return (
    <VStack w="80%" h="85%">
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
          {activeChat?.texts.map((text, i) => (
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
                      _hover={{ cursor: "pointer" }}
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
                    <Icon
                      _hover={{cursor:"pointer"}}
                      as={RiDeleteBin2Line}
                      onClick={() => dispatch(deleteText(i))}
                    />
                    <Icon as={AiOutlineShareAlt} />
                  </HStack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          ))}
        </VStack>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl w="full" isRequired>
            {/* <FormLabel htmlFor="first-name">First name</FormLabel> */}
            <Input
              _focus={{ boxShadow: "none" }}
              id="first-name"
              fontSize="sm"
              autoComplete="off"
              w="full"
              placeholder="Enter a contact name to get started"
              {...register("text")}
            />
          </FormControl>
          <HStack>
            <Icon
              onClick={handleSubmit(onSubmit)}
              ml="auto"
              mr="0.5rem"
              my="7.5px"
              h="20px"
              w="20px"
              color="gray.500"
              as={AiOutlineSend}
            />
          </HStack>
        </form>
      </Box>
    </VStack>
  );
};

export default ActiveChat;
