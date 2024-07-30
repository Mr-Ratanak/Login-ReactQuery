import React from 'react'
import { Button, ButtonGroup, Center, Container, Flex, Grid, Heading, Spacer } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { HStack } from '@chakra-ui/react'

const Dashboard = () => {
  return (
    <>
      
      <Container maxW={1200}>
      <Heading>Dashboard</Heading>
      <Box>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempora officia, rerum dolor culpa blanditiis commodi pariatur dolorem! Quaerat, aspernatur ut? Quo praesentium ipsum provident perspiciatis sunt, nobis impedit tempora!</Text>
        <Flex justifyContent={'center'} mt={3}>
            <Box pt={6} w='30%' h='20' bg='red.300'>
              <Center fontSize={20} fontWeight={'bold'}>100</Center>
            </Box>
            <Spacer />
            <Box pt={6} w='30%' h='20' bg='yellow.300'>
            <Center fontSize={20} fontWeight={'bold'}>1030</Center>
            </Box>
            <Spacer />
            <Box pt={6} w='30%' h='20' bg='green.300'>
            <Center fontSize={20} fontWeight={'bold'}>1.200</Center>
            </Box>
        </Flex>
        </Box>
        <Grid templateColumns={'repeat(3, 1fr'} gap={2}>
            <Spacer />
            <Box w='70px' h='10' bg='blue.500' />
            <Box w='140px' h='10' bg='purple.500' />
            <Box w='180px' h='10' bg='gray.500' />
        </Grid>
        
        <HStack spacing='24px' marginTop={'20px'}>
        <Box w='70px' h='10' bg='teal.500' />
        <Box w='170px' h='10' bg='teal.500' />
        <Box w='180px' h='10' bg='teal.500' />
    </HStack>

    <Spacer mt={4} />
    <Flex minWidth={'max-content'} alignItems={'center'} gap={2} border={'1px solid gray'} p={2}>
      <Box p={2} >
            <Heading size={'md'}>Admin</Heading>
            <Spacer />
      </Box>
      <Spacer />
      <ButtonGroup gap={2}>
        <Button colorScheme='teal'>Login</Button>
        <Button colorScheme='teal'>Sign Up</Button>
      </ButtonGroup>
    </Flex>
    </Container>
    </>
  )
}

export default Dashboard
