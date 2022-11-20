import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Text, Container } from "@chakra-ui/react";
import { Flex, Circle, Box, Image, Badge, useColorModeValue, Icon, chakra, Tooltip, Stack, Heading, Button, Center, VStack } from "@chakra-ui/react";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const data = {
    isNew: true,
    imageURL: item.media.source,
    name: item.name,
    price: 4.0,
    rating: 4.2,
    numReviews: 34,
    description: item.description,
    totalPrice: item.line_total.formatted_with_symbol,
    quantity: item.quantity,
  };

  return (
    <Container maxW="md">
      <Flex w="full" alignItems="center" justifyContent="center" h="auto">
        <Box bg={useColorModeValue("white", "gray.800")} maxW="sm" borderWidth="1px" rounded="lg" shadow="lg" position="relative">
          <Image h="337px" w="full" borderRadius="12px" fontSize="16px" src={data.imageURL} alt={`Picture of ${data.name}`} roundedTop="lg" />
          <Stack spacing="0">
            <VStack>
              <Center>
                <Heading mt={4} pt={4} fontSize="xl" as="h1" fontWeight="bold" isTruncated>
                  {data.name}
                </Heading>
              </Center>
              <Center>
                <Text>{data.totalPrice}</Text>
              </Center>
            </VStack>
            <Flex justifyContent="space-between" m={2} p={4}>
              <Button onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}> - </Button>
              <Center>
                <Text>{data.quantity}</Text>
              </Center>
              <Button onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
              <Button onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </Container>
  );
};

export default CartItem;
