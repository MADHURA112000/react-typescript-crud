import React, { useState } from 'react';
import { EditListForm } from './EditListForm';

export const ListItem = ({
  id,
  name,
  deleteList,
  updateList
}) => {
  const [isEdit, setToggleEditing] = useState(false);

  if (isEdit) {
    return (
      <EditListForm
        id={id}
        name={name}
        updateList={updateList}
        toggleEditForm={setToggleEditing}
      />
    );
  }

  return (
    <>
      <h2>{name}</h2>
      <button onClick={() => setToggleEditing(!isEdit)}>Edit</button>
      <button onClick={() => deleteList(id)}>Delete</button>
    </>
  );
};
