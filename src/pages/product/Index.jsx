import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  HStack,
  Box,
  Text,
  Container,
} from "@chakra-ui/react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const Index = () => {
  const navigate = useNavigate();
  const handleAddClick = () =>{
      navigate('/products/create');
  }

  return (
    <>
    <Container  maxW={1200} mt={4}>
    <HStack mb={5}>
        <Box w='100px' h='40px' fontWeight={'bolder'}>
        <Text pt={2} fontSize={20} >Product</Text>
        <Button onClick={handleAddClick} size={'md'} rounded={3} bg={'green.400'} mt={3} color={'white'}>
          Create
        </Button>
        </Box>
    </HStack>

      <TableContainer pt={10}>
      
        <Table variant="simple" size={'sm'} border={'1px solid gray'} p={2}>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>ID #</Th>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>Quantity</Th>
              <Th>Created</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>001</Td>
              <Td>inches</Td>
              <Td>99.88 </Td>
              <Td>44</Td>
              <Td>20/7/2024</Td>
              <Td>
              <Td>
                  <EditIcon size={2} color={'teal'} cursor={'pointer'} mx={2}/>
                  <DeleteIcon size={2} color={'orange'} cursor={'pointer'}/>
                </Td>
              </Td>
            </Tr>
            <Tr>
              <Td>001</Td>
              <Td>inches</Td>
              <Td>99.88 </Td>
              <Td>44</Td>
              <Td>20/7/2024</Td>
            </Tr>
            <Tr>
              <Td>001</Td>
              <Td>inches</Td>
              <Td>99.88 </Td>
              <Td>44</Td>
              <Td>20/7/2024</Td>
            </Tr>
           
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      </Container>
    </>
  );
};

export default Index;
