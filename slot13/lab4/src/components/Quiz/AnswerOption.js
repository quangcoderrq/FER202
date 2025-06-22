// components/Quiz/AnswerOption.js
import React, { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';

const AnswerOption = ({ questionIndex, answer, answerIndex }) => {
  const { userAnswers, showResults, selectAnswer, questions } = useContext(QuizContext);
  
  const isSelected = userAnswers[questionIndex] === answer;
  const isCorrect = showResults && answer === questions[questionIndex].correctAnswer;
  const isWrong = showResults && isSelected && !isCorrect;

  return (
    <label
      className={`flex items-center p-3 rounded-md cursor-pointer transition duration-200 ${
        showResults
          ? isCorrect
            ? 'bg-green-100 border-green-300'
            : isWrong
            ? 'bg-red-100 border-red-300'
            : 'bg-gray-50 border-gray-200'
          : isSelected
          ? 'bg-blue-100 border-blue-300'
          : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
      } border-2`}
    >
      <input
        type="radio"
        name={`question-${questionIndex}`}
        value={answer}
        checked={isSelected}
        onChange={() => !showResults && selectAnswer(questionIndex, answer)}
        disabled={showResults}
        className="mr-3"
      />
      <span className={`${showResults && isCorrect ? 'font-semibold text-green-700' : ''}`}>
        {answer}
      </span>
      {showResults && isCorrect && (
        <span className="ml-auto text-green-600 font-bold">✓</span>
      )}
      {showResults && isWrong && (
        <span className="ml-auto text-red-600 font-bold">✗</span>
      )}
    </label>
  );
};

export default AnswerOption;