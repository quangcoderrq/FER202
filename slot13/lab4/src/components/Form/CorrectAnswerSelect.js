// components/Form/CorrectAnswerSelect.js
import React, { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';

const CorrectAnswerSelect = () => {
  const { newAnswers, correctAnswer, setCorrectAnswer } = useContext(QuizContext);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Đáp án đúng:
      </label>
      <select
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">Chọn đáp án đúng</option>
        {newAnswers.map((answer, index) => (
          answer && (
            <option key={index} value={answer}>
              {answer}
            </option>
          )
        ))}
      </select>
    </div>
  );
};

export default CorrectAnswerSelect;