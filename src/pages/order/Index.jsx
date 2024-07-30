import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container,
    HStack,
    Box,
    Text,
    Button,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,

 } from '@chakra-ui/react';
 import { EditIcon, DeleteIcon, CheckCircleIcon } from '@chakra-ui/icons';

const IndexOrder = () => {
    const navigate = useNavigate();
    const handleCreateClick = () => {
        navigate('/orders/create');
    }
  return (
    <>
         <Container maxW={1200} mt={4}>
        <HStack mb={5}>
          <Box w="100px" h="40px" fontWeight={"bolder"}>
            <Text pt={2} w={200} fontSize={20}>
              Orders detail
            </Text>
            <Button
              onClick={handleCreateClick}
              size={"md"}
              rounded={3}
              bg={"green.400"}
              mt={3}
              color={'white'}
            >
              Create
            </Button>
          </Box>
        </HStack>

        <TableContainer pt={10} >
          <Table variant="striped" size={'sm'} border={'1px solid gray'}>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
              <Th>Actions</Th>
                <Th>ID #</Th>
                <Th>Order name</Th>
                <Th>Customer name</Th>
                <Th>Quantity</Th>
                <Th>Price</Th>
                <Th>Created at</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                    <CheckCircleIcon boxSize={4} color={'blue.300'} cursor={'pointer'} mx={2}/>
                </Td>
                <Td>001</Td>
                <Td>poiuytrew87654</Td>
                <Td>Naruto Oruchi </Td>
                <Td>8</Td>
                <Td>99.88</Td>
                <Td>20/7/2024</Td>
               
              </Tr>
              <Tr>
              <Td>
              <CheckCircleIcon boxSize={4} color={'blue.300'} cursor={'pointer'} mx={2}/>
                </Td>
                <Td>001</Td>
                <Td>poiuytrew87654</Td>
                <Td>Naruto Oruchi </Td>
                <Td>22</Td>
                <Td>99.88</Td>
                <Td>20/7/2024</Td>
              </Tr>
              <Tr>
              <Td>
              <CheckCircleIcon boxSize={4} color={'blue.300'} cursor={'pointer'} mx={2}/>
                </Td>
                <Td>001</Td>
                <Td>poiuytrew87654</Td>
                <Td>Naruto Oruchi </Td>
                <Td>22</Td>
                <Td>99.88</Td>
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
  )
}

export default IndexOrder
