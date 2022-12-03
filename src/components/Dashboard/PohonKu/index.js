import React from "react";
import Navbar from "../Navbar/index";
import { Footer } from "../../../Utils/index";
import { Flex, Heading, Box, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";
const Pohonku = ({ products, order, cart }) => {
  const data = {
    item: products.line_items,
  };
  //   console.log(cart);

  console.log(cart.line_items);
  //   console.log(data.item);
  return (
    <div>
      <div m={4}>
        <Navbar />
      </div>
      <Box borderWidth="1px" rounded="lg" shadow="1px 1px 3px rgba(0,0,0,0.3)" boxShadow={"2xl"} maxWidth={800} p={10} m="10px auto">
        <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
          PohonKu
        </Heading>

        <Flex align={"center"} justify={"center"}>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Nama Pohon</Th>
                  <Th>Jumlah</Th>
                  <Th>Harga</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  {cart.line_items.map((item) => (
                    <div key={item.id}>
                      <Td>{item.name}</Td>
                      <Td>{item.quantity}</Td>
                      <Td>{item.price.formatted_with_symbol}</Td>
                    </div>
                  ))}
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Box>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Pohonku;
