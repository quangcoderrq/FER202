// context/QuizContext.js
import React, { createContext, useState } from 'react';
import { quizData } from '../data/QuizData';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState(quizData);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswers, setNewAnswers] = useState(['', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const addQuestion = () => {
    if (newQuestion && newAnswers.every(answer => answer.trim()) && correctAnswer) {
      const question = {
        question: newQuestion,
        answers: [...newAnswers],
        correctAnswer: correctAnswer
      };
      setQuestions([...questions, question]);
      
      // Reset form
      setNewQuestion('');
      setNewAnswers(['', '', '']);
      setCorrectAnswer('');
    }
  };

  const selectAnswer = (questionIndex, answer) => {
    setUserAnswers({
      ...userAnswers,
      [questionIndex]: answer
    });
  };

  const submitQuiz = () => {
    setShowResults(true);
  };

  const resetQuiz = () => {
    setUserAnswers({});
    setShowResults(false);
  };

  const value = {
    questions,
    userAnswers,
    showResults,
    newQuestion,
    setNewQuestion,
    newAnswers,
    setNewAnswers,
    correctAnswer,
    setCorrectAnswer,
    addQuestion,
    selectAnswer,
    submitQuiz,
    resetQuiz
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};