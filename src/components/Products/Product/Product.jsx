import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyle from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyle();

  return (
    <Card className={classes.root}>
      <div className={classes.shadow}>
        <CardMedia className={classes.media} image={product.media.source} title={product.name} />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            {/* <Typography variant="h5">{product.price.formatted_with_symbol}</Typography> */}
          </div>
          <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
        </CardContent>
        {/* <CardActions disableSpacing className={classes.cardPriceActions}>
          <Typography variant="h5">{product.price.formatted_with_symbol}</Typography>
        </CardActions> */}
        <CardActions className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.price.formatted_with_symbol}
          </Typography>
          <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
            <AddShoppingCart />
            {/* <Button variant="outlined">
              <Typography variant="h5">Beli</Typography>
            </Button> */}
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
};

export default Product;
