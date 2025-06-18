import React, { useState } from 'react';
import data from './data';
import Question from './Question';
function App() {
  const [question,setQuestion] = useState(data);

  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {question.map((q) => {
            return <Question key={q.id} {...q}></Question>;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
