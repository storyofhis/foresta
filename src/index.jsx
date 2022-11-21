import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";

import Router from "./Router";

const theme = extendTheme({
  components: {
    Steps,
  },
});
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode="light"></ColorModeScript>
    <Router />
  </ChakraProvider>,
  document.getElementById("root")
);
