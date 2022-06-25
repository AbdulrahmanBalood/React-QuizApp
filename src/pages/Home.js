import { useState } from 'react';
import {
  Text,
  VStack,
  Flex,
  Button,
  Input,
  useToast,
  
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { QuizImg } from '../components/QuizImg';
import { OptionsComponent } from '../components/OptionsComponent';
export const Home = ({setName,setDifficultyValue,setCatagoryValue,setTypeValue,setApiURL,difficultyValue,catagoryValue,typeValue,setQuestions,setLoading}) => {
  const DiffList = [
    { lable: 'Easy', value: 'easy' },
    { lable: 'Medium', value: 'medium' },
    { lable: 'Hard', value: 'hard' },
  ];
  const CatList = [
    { lable: 'General knowledge', value: 9 },
    { lable: 'Entertainment: Books', value: 10 },
    { lable: 'Entertainment: Film', value: 11 },
    { lable: 'Entertainment: Music', value: 12 },
    { lable: 'Entertainment: Musicals & Theaters', value: 13 },
    { lable: 'Entertainment: Television', value: 14 },
    { lable: 'Entertainment: Video Games', value: 15 },
    { lable: 'Entertainment: Board Games', value: 16 },
    { lable: 'Science & Nature', value: 17 },
    { lable: 'Science: Computers', value: 18 },
    { lable: 'Science: Mathematics', value: 19 },
    { lable: 'Mythology', value: 20 },
    { lable: 'Sports', value: 21 },
    { lable: 'Geography', value: 22 },
    { lable: 'History', value: 23 },
    { lable: 'Politics', value: 24 },
    { lable: 'Art', value: 25 },
    { lable: 'Celebrities', value: 26 },
    { lable: 'Animals', value: 27 },
  ];
  const TypeList = [
    { lable: 'Multiple Choice', value: 'multiple' },
    { lable: 'True / False', value: 'boolean' },
  ];
  const difficultyOnChange = e => {
    setDifficultyValue(e.target.value);
    setDiffSelected(true)
  };

  const catagoryOnChange = e => {
    setCatagoryValue(e.target.value);
    setCatSelected(true)
  };

  const typeOnChange = e => {
    setTypeValue(e.target.value);
    setTypeSelected(true)
  };
  const nameOnChange = (e) => {
    setName(e.target.value)
    setNameFilled(true)
  }
  const[nameFilled,setNameFilled] = useState(false);
  const[diffSelected,setDiffSelected] = useState(false);
  const[catSelected,setCatSelected] = useState(false);
  const[typeSelected,setTypeSelected] = useState(false);
  const Navigate = useNavigate();
  const toast = useToast()
  const onClick = () => {

    if(nameFilled === false || diffSelected === false || catSelected === false || typeSelected === false) {
        return(  toast({
            title: 'Please fill all the feilds',
            status: 'error',
            duration: 9000,
            isClosable: true,
          }))
          
          
      }
        
    setApiURL(
      `https://opentdb.com/api.php?amount=10&category=${catagoryValue}&difficulty=${difficultyValue}&type=${typeValue}`
    );
    const getQuiz = async () => {
        const request = await fetch(`https://opentdb.com/api.php?amount=10&category=${catagoryValue}&difficulty=${difficultyValue}&type=${typeValue}`);
        const data = await request.json();
        console.log(data);
        if(data.response_code === 1){
            return Navigate("/quizerror")
        }
        setQuestions(data.results);
        setLoading(false);
        Navigate('/quiz');
      };
      getQuiz();
    
    
  };
  
  
  return (
    <Flex height={'100vh'}>
      <VStack
        backgroundColor={'rgb(114,187,220)'}
        width={['100%','100%','100%','60%']}
        justifyContent={'center'}
        alignItems={'center'}
      >
        
        <Text fontSize={'4xl'} color={'white'}>
          Start Your Quiz !
        </Text>
        <Input
          width={['55%','35%','20%','15%']}
          variant="filled"
          placeholder="Enter Your Name Here"
          onChange={nameOnChange}
        />
        <OptionsComponent
          onChange={difficultyOnChange}
          List={DiffList}
          placeholder={'Difficulty'}
        />
        <OptionsComponent
          onChange={catagoryOnChange}
          List={CatList}
          placeholder={'Catagory'}
        />
        <OptionsComponent
          onChange={typeOnChange}
          List={TypeList}
          placeholder={'Type'}
        />
        <Button
          onClick={onClick}
          colorScheme="white"
          variant="outline"
          borderColor={'white'}
        >
          <Text color={'white'}>Start Quiz</Text>
        </Button>
      </VStack>
      
      <QuizImg />
  
    </Flex>
  );
};
