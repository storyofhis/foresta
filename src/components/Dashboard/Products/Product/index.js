import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Text, Container } from "@chakra-ui/react";
import { Flex, Circle, Box, Image, Badge, useColorModeValue, Icon, chakra, Tooltip, Stack, Heading, Button, Center, VStack } from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

const Product = ({ product, onAddToCart }) => {
  const data = {
    isNew: true,
    imageURL: product.media.source,
    name: product.name,
    price: 4.0,
    rating: 4.2,
    numReviews: 34,
    description: product.description,
  };

  return (
    <Container maxW="md">
      <Flex w="full" alignItems="center" justifyContent="center" h="auto">
        <Box bg={useColorModeValue("white", "gray.800")} maxW="sm" borderWidth="1px" rounded="lg" shadow="lg" position="relative">
          <Image h="337px" w="full" borderRadius="12px" fontSize="16px" src={data.imageURL} alt={`Picture of ${data.name}`} roundedTop="lg" />
          <Stack spacing="0">
            <VStack>
              <Center>
                <Heading color={useColorModeValue("black", "white")} mt={4} pt={4} fontSize="xl" as="h1" fontWeight="bold">
                  {data.name}
                </Heading>
              </Center>
              <Center>
                <Text m={1} p={4} dangerouslySetInnerHTML={{ __html: data.description }} />
              </Center>
            </VStack>
            <Flex justifyContent="space-between" m={2} p={4}>
              <Text fontSize="2xl" color={useColorModeValue("gray.800", "white")} as="span">
                Rp. {data.price.toFixed(2)}
              </Text>
              <Button bgColor="#006644" aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                <Text color={useColorModeValue("white", "gray.800")}>Beli</Text>
              </Button>
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Product;
