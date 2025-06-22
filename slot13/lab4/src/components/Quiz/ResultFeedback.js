// components/Quiz/ResultFeedback.js
import React, { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';

const ResultFeedback = ({ questionIndex }) => {
  const { userAnswers, questions, showResults } = useContext(QuizContext);
  
  if (!showResults) return null;

  const isCorrect = userAnswers[questionIndex] === questions[questionIndex].correctAnswer;

  return (
    <div className="mt-3 p-2 rounded-md text-sm">
      {isCorrect ? (
        <span className="text-green-600 font-semibold">✓ Đúng!</span>
      ) : (
        <span className="text-red-600 font-semibold">
          ✗ Sai! Đáp án đúng: {questions[questionIndex].correctAnswer}
        </span>
      )}
    </div>
  );
};

export default ResultFeedback;