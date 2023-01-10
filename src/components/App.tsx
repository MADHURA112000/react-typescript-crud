import React, { useState } from 'react';
import { AddListForm } from './AddListForm';
import { Lists } from './Lists';
import { List } from '../types/types';
import { v4 as uuid } from 'uuid';

const App = () => {
  const initialData = [
    {
      id: uuid(),
      name: 'drink water',
    }
  ];

  const [lists, setLists] = useState(initialData);

  const addList = (newList: List) => {
    newList.id = uuid();
    setLists([...lists, newList]);
  };

  const deleteList = listId => {
    const updatedList = lists.filter(list => listId !== list.id);
    setLists(updatedList);
  };

  const updateList = (listId, newData: List) => {
    let updatedList = lists.map(list => {
      if (list.id === listId) {
        return {
          id: list.id,
          name: newData.name,
        };
      }
      return list;
    });
    setLists(updatedList);
  };

  return (
    <div>
      <h1>ToDo</h1>
      <AddListForm addList={addList} />
      <Lists
        lists={lists}
        deleteList={deleteList}
        updateList={updateList}
      />
    </div>
  );
};

export default App;
