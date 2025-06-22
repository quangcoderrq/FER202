// components/Form/QuestionInput.js
import React, { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';

const QuestionInput = () => {
  const { newQuestion, setNewQuestion } = useContext(QuizContext);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Câu hỏi:
      </label>
      <input
        type="text"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Nhập câu hỏi..."
      />
    </div>
  );
};

export default QuestionInput;