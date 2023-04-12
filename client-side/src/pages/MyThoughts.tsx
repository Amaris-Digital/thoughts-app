import React, { useState } from 'react';
import { Thought } from '../types';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

type MyThoughtsProps = {
  initialThoughts: Thought[];
};

const MyThoughts: React.FC<MyThoughtsProps> = ({ initialThoughts }) => {
  const [thoughts, setThoughts] = useState(initialThoughts);

  const addThought = (thought: Thought) => {
    setThoughts([...thoughts, thought]);
  };

  const updateThought = (updatedThought: Thought) => {
    setThoughts((prevThoughts) => {
      const updatedThoughts = prevThoughts.map((thought) => {
        if (thought.id === updatedThought.id) {
          return updatedThought;
        }
        return thought;
      });
      return updatedThoughts;
    });
  };

  const deleteThought = (id: string) => {
    setThoughts((prevThoughts) => {
      const updatedThoughts = prevThoughts.filter((thought) => thought.id !== id);
      return updatedThoughts;
    });
  };

  return (
    <div>
      <Header />
      <NavBar />
      <h2>My Thoughts Go Here</h2>
      {thoughts.map((thought) => (
        <div key={thought.id}>
          <h3>{thought.question} question</h3>
          <p>{thought.answer} answer</p>
          <button onClick={() => deleteThought(thought.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MyThoughts;