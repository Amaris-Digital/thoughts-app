import React, { useState, useEffect } from 'react';
import { Thought } from '../types';
import { getThoughts } from '../MyThoughtsDB';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

const MyThoughts: React.FC = () => {
  const [thoughts, setThoughts] = useState<Thought[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedThoughts = await getThoughts();
      setThoughts(fetchedThoughts);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <NavBar />
      <h1 className='thoughtlist-h2'>My Thoughts</h1>
      <ul className='thought-list-ul'>
        {thoughts.map((thought) => (
          <li key={thought.id}>
            <h3>{thought.question}</h3>
            <p>{thought.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyThoughts;
