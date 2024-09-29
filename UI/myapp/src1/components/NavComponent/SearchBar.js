import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [searchBarContent, setSearchBarContent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdown1, setDropdown1] = useState('');
  const [dropdown2, setDropdown2] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token') !== undefined) {
      setSearchBarContent(null);
    } else {
      setSearchBarContent(
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', gap: '100px', backgroundColor: '#3c3c3c' }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ fontSize: '15px', borderRadius: '8px' }}
          />
          <select
            value={dropdown1}
            onChange={(e) => setDropdown1(e.target.value)}
            style={{ padding: '1px', fontSize: '15px', height: '30px', borderRadius: '8px' }}
          >
            <option value="">Category</option>
            <option value="option1">Category 1</option>
            <option value="option2">Category 2</option>
            <option value="option3">Category 3</option>
          </select>
          <select
            value={dropdown2}
            onChange={(e) => setDropdown2(e.target.value)}
            style={{ padding: '1px', fontSize: '15px', height: '30px', borderRadius: '8px' }}
          >
            <option value="">Location</option>
            <option value="option4">Location 1</option>
            <option value="option5">Location 2</option>
            <option value="option6">Location 3</option>
          </select>
          <button
            onClick={handleSearch}
            style={{ padding: '1px', fontSize: '15px', height: '30px', width: '95px', color: 'white', backgroundColor: 'green', borderRadius: '8px' }}
          >
            Search
          </button>
        </div>
      );
    }
  }, [searchTerm, dropdown1, dropdown2]);

  const handleSearch = () => {
    // Implement the search logic here
    console.log('Search clicked', { searchTerm, dropdown1, dropdown2 });
  };

  return (
    <>
      {searchBarContent}
    </>
  );
};

export default SearchBar;
