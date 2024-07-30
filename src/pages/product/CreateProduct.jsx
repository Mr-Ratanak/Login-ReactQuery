import { Container, Flex, Spacer, Stack } from "@chakra-ui/react";
import React from "react";
import {
  HStack,
  Box,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Select
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";



const CreateProduct = () => {
  const navigate = useNavigate();
  const handleBackProduct = () =>{
    navigate('/products')
  }
  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    }
    return error;
  }
  function validatePrice(value) {
    let error;
    if (!value) {
      error = "Price is required";
    }
    return error;
  }
  function validateCategory(value) {
    let error;
    if (!value) {
      error = "Category is required";
    } 
    return error;
  }
  
  function validateStock(value) {
    let error;
    if (!value) {
      error = "Stock is required";
    } 
    return error;
  }
  
  function validateQuanity(value) {
    let error;
    if (!value) {
      error = "Quanity is required";
    } 
    return error;
  }

  function validateImage(value) {
    let error;
    if (!value) {
      error = "Image is required";
    } 
    return error;
  }

  return (
    <>
      <Container maxW={1200}>
        <HStack mb={5}>
          <Box w="100px" h="40px" fontWeight={"bolder"}>
            <Text pt={2} fontSize={30} w={200}>
              Product
            </Text>
            Create
          </Box>
        </HStack>
        <Formik
          initialValues={{ product_name: "", price: "", quantity: "", stock: "", image: "" }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form>
                <Flex mx={"auto"} pt={10}>
                  <Field name="product_name" validate={validateName}>
                    {({ field, form }) => (
                      <FormControl
                      mx={2}
                        isInvalid={form.errors.product_name && form.touched.product_name}
                      >
                        <FormLabel>Product name</FormLabel>
                        <Input
                          bg={"gray.100"}
                          {...field}
                          placeholder="product name"
                          variant="flushed"
                          p={2}
                        />
                        <FormErrorMessage>{form.errors.product_name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="category" validate={validateCategory}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.category && form.touched.category}
                      >
                        <FormLabel>Category</FormLabel>
                        <Select variant='flushed' placeholder='Select'>
                          <option value="">Product 1</option>
                          <option value="">Product 2</option>
                          <option value="">Product 3</option>
                          <option value="">Product 4</option>
                        </Select>
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Flex>
                <Flex mx={"auto"} pt={2}>
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
                          placeholder="name"
                          variant="flushed"
                          p={2}
                        />
                        <FormErrorMessage>{form.errors.price}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="stock" validate={validateStock}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.stock && form.touched.stock}
                      >
                        <FormLabel>Stock</FormLabel>
                        <Input
                          bg={"gray.100"}
                          {...field}
                          placeholder="Stock"
                          variant="flushed"
                          p={2}
                        />
                        <FormErrorMessage>{form.errors.stock}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Flex>
                <Flex maxW={'50%'}>
                <Field name="image" validate={validateImage}>
                    {({ field, form }) => (
                      <FormControl
                      mx={2}
                        isInvalid={form.errors.image && form.touched.image}
                      >
                        <FormLabel>Image</FormLabel>
                        <Input
                          bg={"gray.100"}
                          {...field}
                          placeholder="Image"
                          variant="flushed"
                          p={2}
                          type="text"
                        />
                        <FormErrorMessage>{form.errors.image}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  
                  </Flex>
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Submit
              </Button>
              <Button
                mx={2}
                mt={4}
                colorScheme="orange"
                isLoading={props.isSubmitting}
                type="button"
                onClick={()=>handleBackProduct()}
              >
                Back
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default CreateProduct;
