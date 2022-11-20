import React from "react";
import Navbar from "./Navbar";
import { Footer } from "../../Utils/index";
import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Link, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const Register = () => {
  return (
    <>
      <Navbar />
      <Flex minH={"100vh"} align={"center"} justify={"center"} bg={useColorModeValue("gray.50", "gray.800")}>
        <Stack spacing={4} mx={"auto"} maxW={"2xl"} py={12} px={6}>
          <Box rounded={"2xl"} bg={useColorModeValue("white", "gray.700")} boxShadow={"2xl"} p={32}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Sign Up</Heading>
              <br />
            </Stack>
            <Stack spacing={4}>
              <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input type="username" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <FormControl id="telp">
                <FormLabel>No. Telepon</FormLabel>
                <Input type="telp" />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={"#006644"}
                  color={"white"}
                  _hover={{
                    bg: "#006644",
                  }}
                >
                  <Link href="/signup">Selanjutnya</Link>
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </>
  );
};

export default Register;