import React from 'react';

import Input from './Input';

const Search = ({searchClass}) => {
  return (
    <div className={searchClass}>
      <Input
        type='search'
        placeholder="Search"
        inputClass="search-input"
      />
    </div>
  );
}

export default Search;
