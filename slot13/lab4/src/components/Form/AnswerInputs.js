// components/Form/AnswerInputs.js
import React, { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';

const AnswerInputs = () => {
  const { newAnswers, setNewAnswers } = useContext(QuizContext);

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...newAnswers];
    updatedAnswers[index] = value;
    setNewAnswers(updatedAnswers);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Các đáp án:
      </label>
      {newAnswers.map((answer, index) => (
        <input
          key={index}
          type="text"
          value={answer}
          onChange={(e) => handleAnswerChange(index, e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder={`Đáp án ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default AnswerInputs;