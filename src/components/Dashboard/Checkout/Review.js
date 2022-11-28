import React from "react";
import { Text, Heading, List, ListItem, Center, Grid, GridItem, SimpleGrid, Flex, Spacer } from "@chakra-ui/react";
const Review = ({ checkoutToken }) => {
  return (
    <>
      <List>
        <Center>
          <Text alignItems="center" fontSize="2xl">
            Pembayaran dapat dilakukan maksimal 3 hari setelah pemesanan
          </Text>
        </Center>
        <Heading fontSize="2xl">Ringkasan Pesanan</Heading>
        {checkoutToken.live.line_items.map((product) => (
          <ListItem style={{ padding: "10px 0" }} key={product.name}>
            <SimpleGrid columns={[1, 2, 3]} gap={6}>
              <GridItem>
                <Text>{product.name}</Text>
              </GridItem>
              <GridItem>
                <Text>{`${product.quantity}X`}</Text>
              </GridItem>
              <GridItem>
                <Text>{product.line_total.formatted_with_symbol}</Text>
              </GridItem>
            </SimpleGrid>
          </ListItem>
        ))}
        {/* <ListItem style={{ padding: "10px 0" }}> */}
        <Flex minWidth="max-content" alignItems="center" gap={2}>
          <Spacer />
          <Flex gap="2">
            <Text>Total</Text>
            <Text style={{ fontWeight: "700" }}>{checkoutToken.live.subtotal.formatted_with_symbol}</Text>
          </Flex>
        </Flex>

        {/* </ListItem> */}
      </List>
    </>
  );
};

export default Review;
