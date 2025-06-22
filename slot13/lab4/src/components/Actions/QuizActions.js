// components/Actions/QuizActions.js
import React, { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';
import SubmitButton from './SubmitButton';

const QuizActions = () => {
  const { showResults } = useContext(QuizContext);

  return (
    <div className="mt-6">
      {!showResults && <SubmitButton />}
    </div>
  );
};

export default QuizActions;