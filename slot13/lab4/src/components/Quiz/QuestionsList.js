// components/Quiz/QuestionsList.js
import React, { useContext, useEffect } from 'react';
import { QuizContext } from '../../context/QuizContext';
import QuestionItem from './QuestionItem';
import EmptyQuizState from './EmptyQuizState';

const QuestionsList = () => {
  const { questions } = useContext(QuizContext);

  useEffect(() => {
    console.log('Quiz questions updated:', questions);
  }, [questions]);

  if (questions.length === 0) {
    return <EmptyQuizState />;
  }

  return (
    <>
      {questions.map((question, questionIndex) => (
        <QuestionItem
          key={questionIndex}
          question={question}
          questionIndex={questionIndex}
        />
      ))}
    </>
  );
};

export default QuestionsList;