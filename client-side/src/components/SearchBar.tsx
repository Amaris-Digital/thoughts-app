import React, { useState } from 'react';
import '../styles/SearchBar.css'

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <label>
        Search:
        <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
      </label>
      <button type="submit">Search </button>
    </form>
  );
};

export default SearchBar;
