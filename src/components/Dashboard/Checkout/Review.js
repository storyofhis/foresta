import React from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";

const Review = ({ checkoutToken }) => {
  return (
    <>
      <h6 variant="h6" gutterBottom>
        Order summary
      </h6>
      <div disablePadding>
        {checkoutToken.live.line_items.map((product) => (
          <div style={{ padding: "10px 0" }} key={product.name}>
            <div primary={product.name} secondary={`Quantity: ${product.quantity}`} />
            <div variant="body2">{product.line_total.formatted_with_symbol}</div>
          </div>
        ))}
        <div style={{ padding: "10px 0" }}>
          <div primary="Total" />
          <p variant="subtitle1" style={{ fontWeight: "700" }}>
            {checkoutToken.live.subtotal.formatted_with_symbol}
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;
