import React from 'react';
import { Form } from 'react-bootstrap';

function QuizQuestion({ question, onAnswer, disabled, selectedAnswer, setSelectedAnswers }) {
  const handleOptionChange = (e) => {
    const optionId = e.target.value;
    setSelectedAnswers((prev) => ({
      ...prev,
      [question.id]: optionId,
    }));
    const isCorrect = question.options.find((opt) => opt.id === optionId).correct;
    onAnswer(question.id, isCorrect);
  };

  return (
    <div className="quiz-question-card mb-4 p-4 border rounded-3 shadow-sm">
      <h4 className="mb-3 fs-5 fw-bold">{question.question}</h4>
      <Form>
        {question.options.map((option) => (
          <Form.Check
            key={option.id}
            type="radio"
            name={`question-${question.id}`}
            id={`${question.id}-${option.id}`}
            label={option.text}
            value={option.id}
            checked={selectedAnswer === option.id}
            onChange={handleOptionChange}
            disabled={disabled}
            className="mb-2 quiz-radio"
          />
        ))}
      </Form>
    </div>
  );
}

export default QuizQuestion;