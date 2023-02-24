import { Flex, Heading } from "@chakra-ui/react";
import { navContainerStyles, navHeadingStyhles } from "./styles";

const NavBar = () => {
  return (
    <Flex {...navContainerStyles}>
      <Heading {...navHeadingStyhles}>Simple Chat</Heading>
    </Flex>
  );
};

export default NavBar;
