import * as React from "react";
import "@fontsource/inter";
//raleway/400.css
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme";
import HomeModule from "module/home";
import Layout from "module/layout";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Layout>
      <HomeModule />
    </Layout>
  </ChakraProvider>
);
