// components/UI/QuizDisplay.js
import React, { useContext, useEffect } from 'react';
import { QuizContext } from '../../context/QuizContext';
import QuizHeader from './QuizHeader';
import QuestionsList from '../Quiz/QuestionsList';
import QuizActions from '../Actions/QuizActions';
import ScoreDisplay from '../Actions/ScoreDisplay';
import ResetButton from '../Actions/ResetButton';
import 'bootstrap/dist/css/bootstrap.min.css';
const QuizDisplay = () => {
  const { userAnswers, showResults } = useContext(QuizContext);

  useEffect(() => {
    console.log('User answers updated:', userAnswers);
  }, [userAnswers]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <QuizHeader />
      <div className="flex gap-6">
        {/* Left side - Quiz Questions */}
        <div className="flex-1">
          <QuestionsList />
          <QuizActions />
        </div>
        
        {/* Right side - Results */}
        {showResults && (
          <div className="w-80">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">
                Quiz Completed!
              </h2>
              <div className="text-center mb-6">
                <ScoreDisplay />
              </div>
              <ResetButton />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizDisplay;