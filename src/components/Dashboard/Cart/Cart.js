import React from "react";
import Navbar from "../Navbar";
import { Container, Heading, Flex, Stack, SimpleGrid, Grid } from "@chakra-ui/react";
import EmptyCart from "./EmptyCart/EmptyCart";
import FilledCart from "./FilledCart/FilledCart";
import { Footer } from "../../../Utils";
const Cart = ({ cart, handleAddCartQty, handleRemoveFromCart, handleEmptyCart }) => {
  if (!cart.line_items) return "Loading...";
  const data = {
    isNew: true,
    subtotal: cart.subtotal.formatted_with_symbol,
  };
  return (
    <>
      <Navbar />
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Heading>Pesanan ku</Heading>
      </Flex>
      <Grid p={8} flex={4}>
        <SimpleGrid minChildWidth="300px" spacing="7" minH="full">
          {!cart.line_items.length ? (
            <EmptyCart />
          ) : (
            <>
              <FilledCart cart={cart} handleAddCartQty={handleAddCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />
            </>
          )}
        </SimpleGrid>
      </Grid>
      <Footer />
    </>
  );
};

export default Cart;
