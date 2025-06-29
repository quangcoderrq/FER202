import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import QuizQuestion from './QuizQuestion';

const questions = [
  {
    id: 1,
    question: 'HTML là viết tắt của gì?',
    options: [
      { id: 'a', text: 'Hyper Text Markup Language', correct: true },
      { id: 'b', text: 'High Text Machine Language', correct: false },
      { id: 'c', text: 'Hyperlink and Text Markup Language', correct: false },
      { id: 'd', text: 'Home Tool Markup Language', correct: false },
    ],
  },
  {
    id: 2,
    question: 'CSS được sử dụng để làm gì?',
    options: [
      { id: 'a', text: 'Xử lý logic ứng dụng', correct: false },
      { id: 'b', text: 'Tạo giao diện và định dạng', correct: true },
      { id: 'c', text: 'Quản lý cơ sở dữ liệu', correct: false },
      { id: 'd', text: 'Xử lý API', correct: false },
    ],
  },
  {
    id: 3,
    question: 'React là gì?',
    options: [
      { id: 'a', text: 'Một ngôn ngữ lập trình', correct: false },
      { id: 'b', text: 'Một thư viện JavaScript', correct: true },
      { id: 'c', text: 'Một trình duyệt web', correct: false },
      { id: 'd', text: 'Một hệ quản trị cơ sở dữ liệu', correct: false },
    ],
  },
];

function Quiz() {
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswer = (questionId, isCorrect) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setScore(0);
    setSubmitted(false);
    setSelectedAnswers({});
  };

  return (
    <div className="quiz-container p-4">
      <h1 className="text-center mb-5 display-5 fw-bold text-primary">Thử thách Quiz</h1>
      <Card className="shadow-sm rounded-3">
        <Card.Body>
          {questions.map((question) => (
            <QuizQuestion
              key={question.id}
              question={question}
              onAnswer={handleAnswer}
              disabled={submitted}
              selectedAnswer={selectedAnswers[question.id] || ''}
              setSelectedAnswers={setSelectedAnswers}
            />
          ))}
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Button
              variant="primary"
              onClick={handleSubmit}
              disabled={submitted}
              className="btn-hover"
            >
              Nộp bài
            </Button>
            {submitted && (
              <Button variant="secondary" onClick={handleReset} className="btn-hover">
                Làm lại
              </Button>
            )}
          </div>
          {submitted && (
            <h3 className="text-center mt-4 text-success">
              Kết quả: {score}/{questions.length}
            </h3>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Quiz;