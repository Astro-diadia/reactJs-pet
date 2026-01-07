import { CardList } from './CardList';
import { useList } from './useList';
import './App.css';

export const App = () => {
  const { list, toFocus, createItem, setItemTitle, toggleItem, deleteItem } = useList();

  return (
    <div className="app">
      <h1>Список покупок</h1>

      <button className="create-button" onClick={createItem}>
        Новый элемент
      </button>

      <CardList
        list={list}
        toFocus={toFocus}
        onItemTitleChange={setItemTitle}
        onItemToggle={toggleItem}
        onItemDelete={deleteItem}
      />
    </div>
  );
};
