import React from 'react'
import {Text,Flex,HStack,VStack,Button} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
export const QuizNotFound = () => {
    const Navigate = useNavigate();
  return (
    <Flex backgroundColor={'rgb(114,187,220)'} justifyContent={"center"} alignItems={"center"} height={"100vh"}>
    <VStack>
    <HStack>
    <Text  fontSize='6xl' color={"white"}>500</Text>
    </HStack>
    <HStack>
    <Text  fontSize='4xl' color={"white"}> Quiz not found</Text>
    </HStack>
    <Button
      onClick={()=>{Navigate("/")}}
      colorScheme="white"
      variant="outline"
      borderColor={'white'}
    >
      <Text color={'white'}>Return to Homepage</Text>
    </Button>
    </VStack>
    </Flex>
  )
}
