import React from "react";
import { Grid, GridItem, SimpleGrid, Box, Input, Stack, InputGroup, InputRightElement, IconButton, Flex } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import Product from "./Product";
import Navbar from "../Navbar";
import { Footer } from "../../../Utils";

const Products = ({ products, onAddToCart }) => {
  return (
    <div>
      <Navbar />
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <InputGroup size="md">
              <Input pr="4.5rem" type={"text"} placeholder="Cari Bibit Pohon" />
              <InputRightElement width="4.5rem">
                <IconButton ml={2} icon={<BsSearch />} isRound="true" />
              </InputRightElement>
            </InputGroup>
          </Stack>
        </Stack>
      </Flex>

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
