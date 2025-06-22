import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import QuizDisplay from './components/UI/QuizDisplay';
import { QuizProvider } from './context/QuizContext';
import AppHeader from './components/UI/AppHeader';
import AddQuestionForm from './components/Form/AddQuestionForm';

function App() {
  return (
    <QuizProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <AppHeader />
          <AddQuestionForm />
          <QuizDisplay />
        </div>
      </div>
    </QuizProvider>
  );
}

export default App;