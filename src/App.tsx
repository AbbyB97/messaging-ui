import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme";
import HomeModule from "module/home";

export const App = () => (
  <ChakraProvider theme={theme}>
    <HomeModule />
  </ChakraProvider>
);
