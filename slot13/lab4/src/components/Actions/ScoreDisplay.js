// components/Actions/ScoreDisplay.js
import React, { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';

const ScoreDisplay = () => {
  const { questions, userAnswers } = useContext(QuizContext);

  const getScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const score = getScore();

  return (
    <div className="text-center">
      <p className="text-gray-700 text-lg">
        Your score: <span className="font-bold text-2xl text-red-600">{score}</span>
      </p>
    </div>
  );
};

export default ScoreDisplay;