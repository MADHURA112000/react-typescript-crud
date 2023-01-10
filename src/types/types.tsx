export type List = {
  id: string;
  name: string;
};

export type FormProps = {
  addList: (newList: List) => void;
};

export type ListProps = {
  deleteList: (listId: string) => void;
  updateList: (listId, newData: List) => void;
};
