import React from 'react'
import {Text,Flex,HStack,VStack,Button} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
export const Result = ({name,score}) => {
    const Navigate = useNavigate();
  return (
    <Flex backgroundColor={'rgb(114,187,220)'} justifyContent={"center"} alignItems={"center"} height={"100vh"}>
        <VStack>
        <HStack>
        <Text  fontSize='4xl' color={"white"}>{name}</Text>
        </HStack>
        <HStack>
        <Text  fontSize='6xl' color={"white"}> Your score is: {score}</Text>
        </HStack>
        <Button
          onClick={()=>{Navigate("/")}}
          colorScheme="white"
          variant="outline"
          borderColor={'white'}
        >
          <Text color={'white'}>Homepage</Text>
        </Button>
        </VStack>
        </Flex>
  )
}
