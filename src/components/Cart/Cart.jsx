// rafce
import React from "react";
import { Typography, Container } from "@material-ui/core";
import useStyles from "./styles";
import FilledCart from "./FilledCart";
import EmptyCart from "./EmptyCart";

const Cart = ({ cart, handleAddCartQty, handleRemoveFromCart, handleEmptyCart }) => {
  //   const isEmpty = !cart.line_items.length; // true
  const classes = useStyles();
  if (!cart.line_items) return "Loading...";
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shoping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart cart={cart} handleAddCartQty={handleAddCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />}
    </Container>
  );
};

export default Cart;
