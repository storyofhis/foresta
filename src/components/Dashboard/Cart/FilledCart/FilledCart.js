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
      <SimpleGrid minChildWidth="300px" spacing="7" minH="full">
        {cart.line_items.map((item) => (
          <Grid key={item.id}>
            <CartItem item={item} onUpdateCartQty={handleAddCartQty} onRemoveFromCart={handleRemoveFromCart} />
          </Grid>
        ))}
      </SimpleGrid>
      <div>
        <Text m={4} p={4}>
          Subtotal : {data.subtotal}
        </Text>
        <Flex justifyContent="space-between" m={4} p={4}>
          <Button onClick={handleEmptyCart}>Empty Cart</Button>
          <Button>
            <Link to="/checkout">Checkout</Link>
          </Button>
        </Flex>
      </div>
    </>
  );
};

export default FilledCart;
