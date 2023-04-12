import React, { useState } from 'react';

type Question = {
  text: string;
  id: string;
};

type ThoughtFormProps = {
  question: Question;
  onSubmit: (answer: string) => void;
};

const ThoughtForm: React.FC<ThoughtFormProps> = ({ question, onSubmit }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(answer);
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{question.text}</h3>
      <label>
        Your answer:
        <input type="text" value={answer} onChange={(event) => setAnswer(event.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ThoughtForm;
