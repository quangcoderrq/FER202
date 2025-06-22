// components/Form/AddQuestionForm.js
import React from 'react';
import QuestionInput from './QuestionInput';
import AnswerInputs from './AnswerInputs';
import CorrectAnswerSelect from './CorrectAnswerSelect';
import AddQuestionButton from './AddQuestionButton';
import 'bootstrap/dist/css/bootstrap.min.css';
const AddQuestionForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Thêm câu hỏi mới</h2>
      <QuestionInput />
      <AnswerInputs />
      <CorrectAnswerSelect />
      <AddQuestionButton />
    </div>
  );
};

export default AddQuestionForm;