import React from 'react';

import { Input } from './Input';

export const Search = ({searchClass}) => {
  return (
    <div className={searchClass}>
      <Input
        type={'text'}
        placeholder={"Search"}
        className={"search-input"}
      />
    </div>
  );
}
