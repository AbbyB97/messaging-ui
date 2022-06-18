import {
  Button,
  Flex,
  FormControl,
  HStack,
  Icon,
  Input,
  Popover,
  PopoverAnchor,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { addUser } from "redux/chatBoxSlice";

type Inputs = {
  name: string;
};
const ChatListHeader = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const dispatch = useAppDispatch();

  const userChats = useAppSelector((state) => state.userChatStore.userChats);
  const toast = useToast();

  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    onClose();
    const isAdded = userChats.find((userName) => userName.name === data.name);
    if (isAdded) {
      toast({
        title: "User already added",
        description: "This user was already added",
        status: "info",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    dispatch(addUser(data.name));
    toast({
      title: "User added",
      description: "The user was already",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    reset();
  };

  return (
    <Popover
      onOpen={onOpen}
      onClose={onClose}
      isOpen={isOpen}
      isLazy
      lazyBehavior="keepMounted"
    >
      <HStack px="0.5rem" w="full" justify="space-between">
        <PopoverAnchor>
          <Flex align="center">
            <Text ml="10px" fontWeight="semibold">
              All chats
            </Text>
            <Icon mx="5px" as={IoIosArrowDown} />
          </Flex>
        </PopoverAnchor>
        <PopoverTrigger>
          <Button
            bg="#096DD9"
            colorScheme="blue"
            _focus={{ boxShadow: "none" }}
            alignContent="center"
            justifyContent="center"
          >
            <Icon my="auto" mr="8px" w="20px" h="20px" as={AiOutlineMessage} />
            <Text my="auto" fontWeight="semibold" fontSize="sm">
              New Chat
            </Text>
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent _focus={{ boxShadow: "none" }} ml="12.5px" my="5px">
            <PopoverBody>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isRequired>
                  <Input
                    _focus={{ boxShadow: "none" }}
                    id="first-name"
                    fontSize="sm"
                    autoComplete="off"
                    bg="gray.100"
                    placeholder="Enter a contact name to get started"
                    {...register("name")}
                  />
                </FormControl>
              </form>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </HStack>
    </Popover>
  );
};

export default ChatListHeader;
