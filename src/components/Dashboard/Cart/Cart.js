import React from "react";
import Navbar from "../Navbar";
import { Container, Heading, Flex, Stack, SimpleGrid } from "@chakra-ui/react";
import EmptyCart from "./EmptyCart/EmptyCart";
import FilledCart from "./FilledCart/FilledCart";

const Cart = ({ cart, handleAddCartQty, handleRemoveFromCart, handleEmptyCart }) => {
  if (!cart.line_items) return "Loading...";
  return (
    <>
      <Navbar />
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Heading>Pesanan ku</Heading>
      </Flex>
      <SimpleGrid minChildWidth="300px" spacing="7" minH="full">
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart cart={cart} handleAddCartQty={handleAddCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />}
      </SimpleGrid>
    </>
  );
};

export default Cart;
