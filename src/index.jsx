import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import Router from "./Router";
ReactDOM.render(
  <ChakraProvider>
    <ColorModeScript initialColorMode="light"></ColorModeScript>
    <Router />
  </ChakraProvider>,
  document.getElementById("root")
);
