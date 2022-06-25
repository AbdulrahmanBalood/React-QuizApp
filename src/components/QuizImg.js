import React from 'react';
import { Image, VStack, HStack,Flex } from '@chakra-ui/react';
import QuizHome from '../imgs/quizHome.png';
export const QuizImg = () => {
  return (
    <VStack
    width={['0%','0%','0%','40%']}
      backgroundColor={'whitesmoke'}
      height={'100vh'}
      justifyContent={'center'}
    >
      <HStack>
        <Flex  alignItems={'center'} justifyContent={'center'}>
        <Image src={QuizHome}  width={['0%','0%','0%','50%']}/>
        </Flex>
        </HStack>
    </VStack>
  );
};
