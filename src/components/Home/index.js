import React from "react";
import { Navbar, Footer } from "../../Utils";
import { Image, useBreakpointValue, Text, Box, Flex, Avatar, HStack, Link, IconButton, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, useColorModeValue, Stack, Heading } from "@chakra-ui/react";
import HomeSVG from "../../assets/HomeSVG.svg";
import Daun from "../../assets/Daun.svg";
const Home = () => {
  return (
    <>
      <Navbar />
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Image src={HomeSVG} />
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Foresta adalah platform pembelian bibit pohon secara online. Bibit pohon akan ditanam oleh organisasi pecinta lingkungan. Mari ikut berkontribusi selamatkan bumi dengan menanam pohon melalui Foresta.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"#006644"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Explore
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image alt={"Login Image"} width={"550px"} src={Daun} />
        </Flex>
      </Stack>
      <Footer />
    </>
  );
};

export default Home;
