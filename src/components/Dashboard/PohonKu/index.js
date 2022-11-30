import React from "react";
import Navbar from "../Navbar/index";
import { Footer } from "../../../Utils/index";
import { Flex, Heading, Box, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";
const Pohonku = () => {
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
              <TableCaption>
                <Heading fontSize="xl"> Total : 8 Pohon </Heading>
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>Nama Pohon</Th>
                  <Th>Lokasi</Th>
                  <Th>Organisasi</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Pohon Palm</Td>
                  <Td>Balikpapan</Td>
                  <Td>Organisasi Peduli Kalimantan</Td>
                  <Td>Bibit</Td>
                </Tr>
                <Tr>
                  <Td>Pohon Mahoni</Td>
                  <Td>Kediri</Td>
                  <Td>Organisasi Peduli Kediri</Td>
                  <Td>2 Bulan</Td>
                </Tr>
                <Tr>
                  <Td>Pohon Ulin</Td>
                  <Td>Sidoarjo</Td>
                  <Td>Organisasi Peduli Lindungi</Td>
                  <Td>1 Tahun</Td>
                </Tr>
                <Tr>
                  <Td>Pohon Cendana</Td>
                  <Td>Bandung</Td>
                  <Td>Organisasi Peduli Eta</Td>
                  <Td>2 Minggu</Td>
                </Tr>
                <Tr>
                  <Td>Pohon Jati</Td>
                  <Td>Jakarta</Td>
                  <Td>Organisasi Peduli Jeketi</Td>
                  <Td>1 Minggu</Td>
                </Tr>
                <Tr>
                  <Td>Pohon Raflesia</Td>
                  <Td>Bengkulu</Td>
                  <Td>Organisasi Peduli Arnoldi</Td>
                  <Td>10 Tahun</Td>
                </Tr>
                <Tr>
                  <Td>Pohon Gaharu</Td>
                  <Td>Garut</Td>
                  <Td>Organisasi Peduli Jawa Barat</Td>
                  <Td>1 Tahun</Td>
                </Tr>
                <Tr>
                  <Td>Pohon Kertas</Td>
                  <Td>Madura</Td>
                  <Td>Organisasi Peduli Sampang</Td>
                  <Td>1 Menit</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                {/* <Tr>
                  <Th>Pohon Cendana</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr> */}
              </Tfoot>
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
