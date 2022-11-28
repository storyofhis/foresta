import React from "react";
import { Grid, GridItem, SimpleGrid, Box, Input, Stack, InputGroup, InputRightElement, IconButton, Flex, Text, Button } from "@chakra-ui/react";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
const FilledCart = ({ cart, handleAddCartQty, handleRemoveFromCart, handleEmptyCart }) => {
  const data = {
    isNew: true,
    subtotal: cart.subtotal.formatted_with_symbol,
  };
  return (
    <>
      {cart.line_items.map((item) => (
        <SimpleGrid key={item.id} columns={3} minChildWidth="30%">
          <CartItem item={item} onUpdateCartQty={handleAddCartQty} onRemoveFromCart={handleRemoveFromCart} />
        </SimpleGrid>
      ))}
      <Box justify="center" align="center">
        <Text m={4} p={4}>
          Subtotal : {data.subtotal}
        </Text>
        <Flex justifyContent="space-between" m={4} p={4}>
          <Button onClick={handleEmptyCart}>Empty Cart</Button>
          <Button>
            <Link to="/checkout">Checkout</Link>
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default FilledCart;
