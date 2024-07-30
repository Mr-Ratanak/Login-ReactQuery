import { ArrowForwardIcon } from '@chakra-ui/icons'
import { 
  Heading, Flex, Text, Button,
  HStack, Box, Spacer

 } from '@chakra-ui/react'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <Box  p={3} bg={'pink.300'}>
        <Flex align={'center'} >
          <Heading size='lg' fontSize='20px' color={'whitesmoke'}>POS </Heading>      
          <Spacer />
          <HStack textTransform={'uppercase'} fontSize={'13px'} color={'whitesmoke'}>
            <Link to={'/'}>Dashboard</Link>
            <Link to={'/customers'}>Customer</Link>
            <Link to={'/products'}>Product</Link>
            <Link to={'/orders'}>Order</Link>
            <Button rounded={4} colorScheme='teal' size='sm' ml={2}><ArrowForwardIcon /> Logout</Button>
          </HStack>
        </Flex>
      </Box>
        <Outlet /> 
    </>
  )
}

export default RootLayout
