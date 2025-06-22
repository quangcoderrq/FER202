// components/Actions/ResetButton.js
import React, { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';

const ResetButton = () => {
  const { resetQuiz } = useContext(QuizContext);

  return (
    <button
      onClick={resetQuiz}
      className="w-full bg-red-500 hover:bg-red-600 text-balack font-bold py-2 px-4 rounded transition duration-200"
    >
      Reset Quiz
    </button>
  );
};

export default ResetButton;