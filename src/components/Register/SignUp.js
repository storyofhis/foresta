import React from "react";
import Navbar from "./Navbar";
import { Footer } from "../../Utils/index";
import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Link, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const SignUp = () => {
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
              <FormControl id="name">
                <FormLabel>Nama Lengkap</FormLabel>
                <Input type="name" />
              </FormControl>
              <FormControl id="nik">
                <FormLabel>NIK</FormLabel>
                <Input type="nik" />
              </FormControl>
              <FormControl id="tempat-lahir">
                <FormLabel>Tempat Lahir</FormLabel>
                <Input type="tempat-lahir" />
              </FormControl>
              <FormControl id="tanggal-lahir">
                <FormLabel>Tanggal Lahir</FormLabel>
                <Input type="tanggal-lahir" />
              </FormControl>
              <FormControl id="jenis-kelamin">
                <FormLabel>Jenis Kelamin</FormLabel>
                <Input type="jenis-kelamin" />
              </FormControl>
              <FormControl id="alamat">
                <FormLabel>Alamat</FormLabel>
                <Input type="alamat" />
              </FormControl>
              <FormControl id="pekerjaan">
                <FormLabel>Pekerjaan</FormLabel>
                <Input type="pekerjaan" />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={"#006644"}
                  color={"white"}
                  _hover={{
                    bg: "#006644",
                  }}
                >
                  <Link href="/login">Selanjutnya</Link>
                </Button>
                <Button
                  bg={"#006644"}
                  color={"white"}
                  _hover={{
                    bg: "#006644",
                  }}
                >
                  <Link href="/register">Kembali</Link>
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

export default SignUp;
