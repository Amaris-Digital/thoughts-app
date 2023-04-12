import React, { useState, useEffect } from 'react';
import { Thought } from '../types';
import { getThoughts } from '../MyThoughtsDB';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';

const filterThoughts = (thoughts: Thought[], query: string): Thought[] => {
  return thoughts.filter((thought) => {
    const text = thought.question.toLowerCase() + thought.answer.toLowerCase();
    return text.includes(query.toLowerCase());
  });
};

const MyThoughts: React.FC = () => {
  const [thoughts, setThoughts] = useState<Thought[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const fetchedThoughts = await getThoughts();
      setThoughts(fetchedThoughts);
    };
    fetchData();
  }, []);

  const filteredThoughts = filterThoughts(thoughts, searchQuery);

  return (
    <div>
      <Header />
      <NavBar />
      <SearchBar onSearch={setSearchQuery} />
      <h1 className='thoughtlist-h2'>My Thoughts</h1>
      <ul className='thought-list-ul'>
        {filteredThoughts.map((thought) => (
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
