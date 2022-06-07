import { FC, ReactNode } from 'react';

type ListItem = { id: string; [key: string]: ReactNode };
type Props = {
  listItems: ListItem[];
};

/*
  Perhaps very over engineered! I wanted to wrtie a reusable
  List component that could take in a array of objects with a id 
  (used for the React list key) and render what ever component is 
  passed as the other value.
*/

const listItemRenderer = (listItem: ListItem) => {
  const itemKey = Object.keys(listItem).filter(key => key !== 'id')[0];
  return listItem[itemKey];
};

export const List: FC<Props> = ({ listItems }) => {
  return (
    <ul>
      {listItems.map(Listitem => (
        <li key={Listitem.id}>{listItemRenderer(Listitem)}</li>
      ))}
    </ul>
  );
};
