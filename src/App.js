import { useState } from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import {QuizNotFound} from './pages/QuizNotFound'
import { QuizPage } from './pages/QuizPage';
import { Result } from './pages/Result';
import { NotFound } from './pages/NotFound';

function App() {
  const[name,setName]= useState('')
  const [difficultyValue, setDifficultyValue] = useState('');
  const [catagoryValue, setCatagoryValue] = useState('');
  const [typeValue, setTypeValue] = useState('');
  const [apiURL, setApiURL] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const[score, setScore]= useState(0)
  console.log(apiURL);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home setName={setName} setDifficultyValue={setDifficultyValue} 
            setCatagoryValue= {setCatagoryValue}  setTypeValue= {setTypeValue}
            setApiURL= {setApiURL} difficultyValue={difficultyValue}
            catagoryValue={catagoryValue} typeValue={typeValue}
            setQuestions={setQuestions} setLoading={setLoading}
            />}
          />
          <Route path="/quiz" element={<QuizPage name={name} questions={questions} loading={loading} score={score} setScore={setScore} />} />
          <Route path='/result' element={<Result name={name} score = {score} />} ></Route>
          <Route path='*' element={<NotFound/>} />
          <Route path='/quizerror' element={<QuizNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
