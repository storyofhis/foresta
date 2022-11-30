import React from "react";
import Navbar from "./Navbar";
import { Footer } from "../../Utils/index";
import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Link, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { Steps, Step, useSteps } from "chakra-ui-steps";

const steps = [{ label: "Pendaftaran" }, { label: "Form" }];

const Register = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  return (
    <>
      <Navbar />
      <main>
        <Box borderWidth="1px" rounded="lg" shadow="1px 1px 3px rgba(0,0,0,0.3)" boxShadow={"2xl"} maxWidth={800} p={6} m="10px auto" as="form">
          <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
            Daftar
          </Heading>
          <Steps activeStep={activeStep}>
            {steps?.map(({ label }) => (
              <Step label={label} key={label}>
                <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
                  {label}
                </Heading>
              </Step>
            ))}
          </Steps>
          {activeStep === steps.length ? (
            <Flex px={4} py={4} width="100%" flexDirection="column">
              <Heading fontSize="xl" textAlign="center">
                Akun anda Telah Terbuat !
              </Heading>
              <Button mx="auto" mt={6} size="sm">
                <Link href="/dashboard">Masuk</Link>
              </Button>
            </Flex>
          ) : activeStep === 0 ? (
            <Flex align={"center"} justify={"center"}>
              <Stack>
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
                    onClick={nextStep}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Selanjutnya"}
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          ) : (
            // <Flex align={"center"} justify={"center"}>
            <Stack>
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
                  onClick={nextStep}
                >
                  {activeStep === steps.length - 1 ? "Selanjutnya" : ""}
                </Button>
                <Button
                  bg={"#006644"}
                  color={"white"}
                  _hover={{
                    bg: "#006644",
                  }}
                  onClick={prevStep}
                >
                  Kembali
                </Button>
              </Stack>
            </Stack>
            // </Flex>
          )}
        </Box>
      </main>
      <Footer />
    </>
  );
};

export default Register;
