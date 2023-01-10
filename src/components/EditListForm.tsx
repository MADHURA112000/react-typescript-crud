import React from 'react';
import { useForm } from '../hooks/useForm';

export const EditListForm = ({
  id,
  name,
  updateList,
  toggleEditForm
}) => {
  const [list, handleChange] = useForm({ id,name });

  const handleSubmit = e => {
    e.preventDefault();
    updateList(id, list);
    toggleEditForm(false);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Edit"
          name="name"
          value={list.name}
          onChange={handleChange}
        />

        <button>Save</button>
      </form>
    </>
  );
};
