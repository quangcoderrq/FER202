// components/Actions/SubmitButton.js
import React, { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';

const SubmitButton = () => {
  const { userAnswers, questions, submitQuiz } = useContext(QuizContext);
  
  const isDisabled = Object.keys(userAnswers).length !== questions.length;

  return (
    <button
      onClick={submitQuiz}
      disabled={isDisabled}
      className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-balack font-bold py-2 px-6 rounded transition duration-200"
    >
      Nộp bài
    </button>
  );
};

export default SubmitButton;