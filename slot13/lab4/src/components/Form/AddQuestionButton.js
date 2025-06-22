// components/Form/AddQuestionButton.js
import React, { useContext } from 'react';
import { QuizContext } from '../../context/QuizContext';

const AddQuestionButton = () => {
  const { addQuestion } = useContext(QuizContext);

  return (
    <button
      onClick={addQuestion}
      className="bg-blue-500 hover:bg-blue-600 text-balack font-bold py-2 px-4 rounded transition duration-200"
    >
      Thêm câu hỏi
    </button>
  );
};

export default AddQuestionButton;