import React from 'react';
import { ListItem } from './Listltem';

export const Lists = ({ lists, deleteList, updateList }) => {
  return (
    <div>
      {lists.map(list => (
        <ListItem
          key={list.id}
          id={list.id}
          name={list.name}
          deleteList={deleteList}
          updateList={updateList}
        />
      ))}
    </div>
  );
};
