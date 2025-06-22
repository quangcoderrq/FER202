// components/Quiz/QuestionItem.js
import React from 'react';
import AnswerOption from './AnswerOption';
import ResultFeedback from './ResultFeedback';

const QuestionItem = ({ question, questionIndex }) => {
  return (
    <div className="mb-6 p-4 border border-gray-200 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">
        {questionIndex + 1}. {question.question}
      </h3>
      
      <div className="space-y-2">
        {question.answers.map((answer, answerIndex) => (
          <AnswerOption
            key={answerIndex}
            questionIndex={questionIndex}
            answer={answer}
            answerIndex={answerIndex}
          />
        ))}
      </div>
      
      <ResultFeedback questionIndex={questionIndex} />
    </div>
  );
};

export default QuestionItem;