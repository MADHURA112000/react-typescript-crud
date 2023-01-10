import React, { useState } from 'react';
import { FormProps } from '../types/types';
import { List } from '../types/types';

export const AddListForm: React.FC<FormProps> = ({ addList }) => {
  const initialValue: List = {
    id: '',
    name: ''
    
  };

  const [list, setList] = useState(initialValue);

  const handleChange = e => {
    setList({ ...list, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addList(list);
    setList(initialValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter"
          onChange={handleChange}
          value={list.name}
        />
        <button>ADD</button>
      </form>
    </>
  );
};
