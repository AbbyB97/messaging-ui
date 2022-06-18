import { Container } from "@chakra-ui/react";
import NavBar from "components/nav-bar";
import Dissolve from "module/dissolve";
import React, { ReactNode } from "react";
import { conatainerStyles } from "./styles";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Dissolve>
    <Container {...conatainerStyles}>
      <NavBar />
      {children}
    </Container>
    </Dissolve>
  );
};

export default Layout;
