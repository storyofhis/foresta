import React from "react";
import { Text, Heading, List, ListItem } from "@chakra-ui/react";
const Review = ({ checkoutToken }) => {
  return (
    <>
      <List>
        {checkoutToken.live.line_items.map((product) => (
          <ListItem style={{ padding: "10px 0" }} key={product.name}>
            <Text>{product.name}</Text>
            <Text>{`Quantity: ${product.quantity}`}</Text>
            <Heading>{product.line_total.formatted_with_symbol}</Heading>
          </ListItem>
        ))}
        <ListItem style={{ padding: "10px 0" }}>
          <Text />
          <Text style={{ fontWeight: "700" }}>{checkoutToken.live.subtotal.formatted_with_symbol}</Text>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
