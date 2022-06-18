import * as React from "react";
import "@fontsource/inter";
//raleway/400.css
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme";
import HomeModule from "module/home";
import Layout from "module/layout";
import store from "redux/store";
import { Provider } from "react-redux";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <Layout>
        <HomeModule />
      </Layout>
    </Provider>
  </ChakraProvider>
);
