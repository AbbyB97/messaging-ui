import { Box, Container } from "@chakra-ui/react";
import NavBar from "components/nav-bar";
import { conatainerStyles } from "./styles";

const HomeModule = () => {
  return (
    <Container {...conatainerStyles}>
      <NavBar />
      <Box>Home mod</Box>
    </Container>
  );
};

export default HomeModule;
