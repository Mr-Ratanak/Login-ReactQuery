import React from 'react'
import { 
    Container,
    FormControl,
    FormLabel,
    Input,
    Button,
    FormErrorMessage,
    Flex,
    Text,
    Select,
    HStack,
    Box,
    Spacer,
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
import { Formik, Form, Field } from "formik";
import { useNavigate } from 'react-router-dom';

const CreateOrder = () => {

    const navigate = useNavigate();
    const handleClickBack = () =>{
        navigate("/orders");
    }

    const validateCustomer= (value) => {  
        let error
        if (!value) {
          error = "First name is required"
        }
        return error
      }
      const validateProduct= (value) => {  
        let error
        if (!value) {
          error = "Product name is required"
        }
        return error
      }
      const validateQty= (value) => {  
        let error
        if (!value) {
          error = "Quantity is required"
        }
        return error
      }
      const validatePrice= (value) => {  
        let error
        if (!value) {
          error = "Price is required"
        }
        return error
      }
      const validateDiscouont= (value) => {  
        let error
        if (!value) {
          error = "Discount is required"
        }
        return error
      }
      const validateTotal= (value) => {
        let error
        if (!value) {
          error = ""
        }
        return error
      }


  return (
    <>
      <Container maxW={1200} mb={2}>
        <HStack mb={5}>
          <Box w="100px" h="40px" fontWeight={"bolder"}>
            <Text pt={2} fontSize={30} w={200}>
              Orders
            </Text>
            Create
          </Box>
        </HStack>
        <Formik
          initialValues={{ customer_name: "", product_name: "", quantity: "", price: "", discount: "", total: ""}}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form>
                <Box w={'19%'} pt={6}>
                <Field name="customer_name" validate={validateCustomer}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.customer_name && form.touched.customer_name}
                      >
                        <Select variant='flushed' placeholder='Select' bg={'gray.100'}>
                          <option value="">Name 1</option>
                          <option value="">Name 2</option>
                          <option value="">Name 3</option>
                          <option value="">Name 4</option>
                        </Select>
                        <FormErrorMessage>{form.errors.customer_name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Box>
                <Flex mx={"auto"} pt={3} >
                  <Field name="product_name" validate={validateProduct}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.product_name && form.touched.product_name}
                      >
                        <FormLabel>Product</FormLabel>
                        <Select variant='flushed' placeholder='Select products' bg={'gray.100'}>
                          <option value="">Name 1</option>
                          <option value="">Name 2</option>
                          <option value="">Name 3</option>
                          <option value="">Name 4</option>
                        </Select>
                        <FormErrorMessage>{form.errors.product_name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="price" validate={validatePrice}>
                    {({ field, form }) => (
                      <FormControl
                      mx={2}
                        isInvalid={form.errors.price && form.touched.price}
                      >
                        <FormLabel>Price</FormLabel>
                        <Input
                          bg={"gray.100"}
                          {...field}
                          placeholder="0"
                          variant="flushed"
                          p={2}
                        />
                        <FormErrorMessage>{form.errors.price}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="quantity" validate={validateQty}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.quantity && form.touched.quantity}
                      >
                        <FormLabel>Phone number</FormLabel>
                        <Input
                          bg={"gray.100"}
                          {...field}
                          placeholder="0"
                          variant="flushed"
                          p={2}
                        />
                        <FormErrorMessage>{form.errors.quantity}</FormErrorMessage>
                      </FormControl>
                    )}
                    </Field>
                    <Field name="discount" validate={validateDiscouont}>
                    {({ field, form }) => (
                      <FormControl
                      mx={2}
                        isInvalid={form.errors.discount && form.touched.discount}
                      >
                        <FormLabel>Discount (%)</FormLabel>
                        <Input
                          bg={"gray.100"}
                          {...field}
                          placeholder="0"
                          variant="flushed"
                          p={2}
                        />
                        <FormErrorMessage>{form.errors.discount}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="total" validate={validateTotal}>
                    {({ field, form }) => (
                      <FormControl
                      mx={2}
                      isInvalid={form.errors.total && form.touched.total}
                      >
                        <FormLabel>Total</FormLabel>
                        <Input
                          bg={"gray.100"}
                          {...field}
                          placeholder="0"
                          variant="flushed"
                          p={2}
                        />
                        <FormErrorMessage>{form.errors.total}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                    <Box>
                    <Button
                    mx={2}
                    p={2}
                    mt={9}
                    size={'sm'}
                    colorScheme="purple"
                    isLoading={props.isSubmitting}
                    type="submit"
                    rounded={3}
                    onClick={()=>handleClickBack()}
                    >
                        ADD
                    </Button>
                    </Box>
                  </Flex>

                  <TableContainer pt={10} >
          <Table variant="striped" size={'sm'} border={'1px solid gray'}>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
            <Tr>
            <Th colSpan={5}>Details</Th>
            <Th>Price</Th>
            </Tr>
              <Tr>
                <Th>ID #</Th>
                <Th>Product name</Th>
                <Th>Quantity</Th>
                <Th>Discount (%)</Th>
                <Th>Price</Th>
                <Th>Total</Th>
                <Th>Created at</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
               
                <Td>001</Td>
                <Td>poiuytrew87654</Td>
                <Td>2 </Td>
                <Td>8</Td>
                <Td>99.88</Td>
                <Td>454343</Td>
                <Td>20/7/2024</Td>
               
              </Tr>
              <Tr>
             
                <Td>001</Td>
                <Td>poiuytrew87654</Td>
                <Td>2 </Td>
                <Td>22</Td>
                <Td>99.88</Td>
                <Td>454343</Td>
                <Td>20/7/2024</Td>
              </Tr>
              <Tr>
              
                <Td>001</Td>
                <Td>poiuytrew87654</Td>
                <Td>45</Td>
                <Td>22</Td>
                <Td>99.88</Td>
                <Td>454343</Td>
                <Td>20/7/2024</Td>
              </Tr>
            </Tbody>
            
            <Tfoot>
            <Tr>
                <Th rowSpan={2}>Total</Th>
                <Th></Th>  <Th></Th>  <Th></Th>
                <Th >0.0 $</Th>
                <Th isNumeric>modified by</Th>
              </Tr>
            </Tfoot>
            <Tfoot>
              <Tr>
                <Th rowSpan={2}>Subtotal</Th>
                <Th></Th>  <Th></Th>  <Th></Th> 
                <Th >0.0 $</Th>
              </Tr>
             
            </Tfoot>
          </Table>
        </TableContainer>
            <Button
            mt={4}
            colorScheme="green"
            rounded={3}
            isLoading={props.isSubmitting}
            type="submit"
            >
            SAVE
            </Button>
            <Button
            mt={4}
            mx={2}
            colorScheme="blue"
            rounded={3}
            onClick={handleClickBack}
            type="button"
            >
            BACK
            </Button>
            </Form>
          )}
        </Formik>

      
      </Container> 
    </>
  )
}

export default CreateOrder
