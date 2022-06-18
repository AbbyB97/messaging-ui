import { Flex, Heading } from "@chakra-ui/react";
import { navContainerStyles, navHeadingStyhles } from "./styles";

const NavBar = () => {
  return (
    <Flex {...navContainerStyles}>
      <Heading {...navHeadingStyhles}>Smarter.Codes</Heading>
    </Flex>
  );
};

export default NavBar;
