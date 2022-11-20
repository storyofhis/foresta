import React from "react";
import { Grid, GridItem, SimpleGrid, Box } from "@chakra-ui/react";
import Product from "./Product";
import Navbar from "../Navbar";
import { Footer } from "../../../Utils";
const Products = ({ products, onAddToCart }) => {
  return (
    <div>
      <Navbar />
      <SimpleGrid minChildWidth="300px" spacing="7" minH="full">
        {products.map((product) => (
          <Grid item key={product.id} margin="20px">
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </SimpleGrid>
      <Footer />
    </div>
  );
};

export default Products;
