import React, { useState } from 'react'
import { Input, Box, Flex, InputRightElement } from '@chakra-ui/react'
import { InputGroup } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message"
import { useAuth } from '../../context/AuthContext'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useMutation } from '@tanstack/react-query'
import { login as loginAPI} from '../../api'

export default function Login(){  
        const [show, setShow] = React.useState(false)
        const handleClick = () => setShow(!show);
        const {login} = useAuth();

        const centerBoxs = {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, 70%)',
          border: '1px solid gray',
          borderRadious: '5px',
       }

        const {
          register,
          formState: { errors },
          handleSubmit,
        } = useForm();

        const mutation = useMutation(loginAPI, {
          onSuccess: (data) => {
            login(data);
          },
          onError: (error) => {
            console.error('Login failed:', error);
          },
        });

  const onSubmit = (data)=>{
    mutation.mutate(data);
  }


  return (  
    <>
      <Box sx={centerBoxs} borderRadius={5} p={4} > 
        <form onSubmit={handleSubmit(onSubmit)} >
        <Text py={2} fontSize={20} fontWeight={'bold'}>Login</Text>
                <Flex mx={"auto"} pt={3} direction={'column'}>
                 <Input
                      bg={"gray.100"}
                      placeholder="E-Mail"
                      variant="outline"
                      p={2}
                      w={'250px'}
                      {...register('email', { required: 'Email is required' })}
                    />
                 <Text color={'red'}><ErrorMessage errors={errors} name="email" /></Text>
                   <InputGroup>
                       <Input
                          my={2}
                          bg={"gray.100"}
                          placeholder="Password"
                          variant="outline"
                          p={2}
                          type={show ? 'text' : 'password'}
                          w={'250px'}
                          {...register('password', { required: 'Password is required' })}
                        />
                        <InputRightElement>
                          <Text h='.9rem' cursor={'pointer'} size='sm' onClick={handleClick}>
                            {show ? <ViewOffIcon />: <ViewIcon />}
                          </Text>
                        </InputRightElement>
                        
                       </InputGroup>
                       <Text color={'red'}><ErrorMessage errors={errors} name="password" /></Text>
                </Flex>
               
              <Button
                mt={4}
                colorScheme="teal"
                bg={'teal'}
                type="submit"
                rounded={3} color={'white'}
              >
                Submit
              </Button>
              </form>
        </Box>
    </>
  )
}

