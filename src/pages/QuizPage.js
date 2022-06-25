import React, { useEffect, useState } from 'react';
import {
  Button,
  VStack,
  HStack,
  Flex,
  Text,
  Spinner,
  useDisclosure,
  useToast,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Container,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const QuizPage = ({ name, questions, loading, score, setScore }) => {
  const Navigate = useNavigate();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const [questionIndex, setquestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const randomOptions = options => {
    return options.sort(() => Math.random() - 0.5);
  };
  console.log(questions);
  useEffect(() => {
    const getOptions = () => {
      if (questions.length > 0) {
        setOptions(
          questions &&
            randomOptions([
              questions[questionIndex]?.correct_answer,
              ...questions[questionIndex]?.incorrect_answers,
            ])
        );
      }
    };
    getOptions();
  }, [questionIndex]);
  if (questionIndex === 10) {
    Navigate('/result');
  }
  return (
    <>
      <Flex
        color={'white'}
        backgroundColor={'rgb(114,187,220)'}
        justifyContent={'center'}
        alignItems={'center'}
        height={'100vh'}
      >
        {loading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="rgb(114,187,220)"
            color="gray.200"
            size="xl"
          />
        ) : (
          <Container width={['100%']}>
            <VStack width={['100%']}>
              <Text fontSize={["5xl"]}>{name}</Text>
              <Text fontSize={["2xl"]}>Score: {score}</Text>
              <Text fontSize={["3xl"]}>
                Question {[questionIndex + 1]}: {questions[questionIndex].question}
              </Text>
              <HStack>
                {options.map((option, index) => {
                  return (
                    <>
                      <Button
                        variant="outline"
                        isDisabled={buttonDisabled}
                        value={option}
                        onClick={() => {
                          console.log(index);
                          setButtonDisabled(true);
                          if (option === questions[questionIndex].correct_answer) {
                            setScore(score + 1);
                           
                            toast({
                              title: 'Correct',
                              status: 'success',
                              duration: 1000,
                              isClosable: true,
                            });
                          } else {
                            toast({
                              title: 'Wrong',
                              status: 'error',
                              duration: 1000,
                              isClosable: true,
                            });
                          }
                        }}
                        key={index}
                        colorScheme={'white'}
                      >
                        <Text color={'white'}>{option}</Text>
                      </Button>
                    </>
                  );
                })}
              </HStack>
              <HStack padding={'1.5rem'}>
                <Button colorScheme={'red'} onClick={onOpen}>
                  Quit
                </Button>
                <AlertDialog
                  isOpen={isOpen}
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
                >
                  <AlertDialogOverlay>
                    <AlertDialogContent>
                      <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Quit Quiz
                      </AlertDialogHeader>

                      <AlertDialogBody>
                        Are you sure you want to quit ?
                      </AlertDialogBody>

                      <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                          Cancel
                        </Button>
                        <Button
                          colorScheme="red"
                          onClick={() => {
                            Navigate('/');
                          }}
                          ml={3}
                        >
                          Quit
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
                <Button
                  colorScheme={'green'}
                  onClick={() => {
                    setquestionIndex(questionIndex + 1);
                    
                    setButtonDisabled(false);
                  }}
                >
                  Next Question
                </Button>
              </HStack>
            </VStack>
          </Container>
        )}
      </Flex>
    </>
  );
};
