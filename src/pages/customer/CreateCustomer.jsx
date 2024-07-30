import React from 'react'
import { useNavigate } from 'react-router-dom';
import { 
    Container, FormControl, FormLabel, Input, Button, Text,
    HStack, Box, Flex, FormErrorMessage
} 
    from '@chakra-ui/react'
    import { Field, Form, Formik } from "formik";

const CreateCustomer = () => {
    const navigate = useNavigate();
    const handleBackProduct = () =>{
      navigate('/customers');
    }

    const validateFName = (value) => {
        let error
        if (!value) {
          error = 'First name is required'
        }
        return error
      }
      const validateLName = (value) => {
        let error
        if (!value) {
          error = 'Last name is required'
        }
        return error
      }
      const validateEmail= (value) => {
        let error
        if (!value) {
          error = 'Email is required'
        }
        return error
      }
      const validatePhoneNum = (value) => {
        let error
        if (!value) {
          error = 'First name is required'
        }
        return error
      }
      const validateCode = (value) => {
        let error
        if (!value) {
          error = 'First name is required'
        }
        return error
      }
    
  return (
    <>
       <Container maxW={1200}>
        <HStack mb={5}>
          <Box w="100px" h="40px" fontWeight={"bolder"}>
            <Text pt={2} fontSize={30} w={200}>
              Customer
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
                  <Field name="first_name" validate={validateFName}>
                    {({ field, form }) => (
                      <FormControl
                      mx={2}
                        isInvalid={form.errors.first_name && form.touched.first_name}
                      >
                        <FormLabel>First name</FormLabel>
                        <Input
                          bg={"gray.100"}
                          {...field}
                          placeholder="product name"
                          variant="flushed"
                          p={2}
                        />
                        <FormErrorMessage>{form.errors.first_name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="last_name" validate={validateLName}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.last_name && form.touched.last_name}
                      >
                        <FormLabel>Last name</FormLabel>
                        <Input
                          bg={"gray.100"}
                          {...field}
                          placeholder="Last name"
                          variant="flushed"
                          p={2}
                          type="text"
                        />
                        <FormErrorMessage>{form.errors.last_name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Flex>
                <Flex mx={"auto"} pt={2}>
                  <Field name="email" validate={validateEmail}>
                    {({ field, form }) => (
                      <FormControl
                      mx={2}
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <FormLabel>Email</FormLabel>
                        <Input
                          bg={"gray.100"}
                          {...field}
                          placeholder="name"
                          variant="flushed"
                          p={2}
                        />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="phone_number" validate={validatePhoneNum}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.phone_number && form.touched.phone_number}
                      >
                        <FormLabel>Phone number</FormLabel>
                        <Input
                          bg={"gray.100"}
                          {...field}
                          placeholder="Stock"
                          variant="flushed"
                          p={2}
                        />
                        <FormErrorMessage>{form.errors.phone_number}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Flex>
                <Flex maxW={'50%'}>
                <Field name="code" validate={validateCode}>
                    {({ field, form }) => (
                      <FormControl
                      mx={2}
                        isInvalid={form.errors.code && form.touched.code}
                      >
                        <FormLabel>Code</FormLabel>
                        <Input
                          bg={"gray.100"}
                          {...field}
                          placeholder="Image"
                          variant="flushed"
                          p={2}
                          type="file"
                        />
                        <FormErrorMessage>{form.errors.code}</FormErrorMessage>
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
  )
}

export default CreateCustomer
