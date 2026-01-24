import { CardList } from '../components/CardList'
import { useList } from '../useList'
import '../styles/List.css'

export const List = () => {
  const { list, toFocus, createItem, setItemTitle, toggleItem, deleteItem, reorderList } = useList()

  return (
    <div className="list">
      <h1>Список покупок</h1>

      <button className="list__btn" onClick={createItem}>
        Новый элемент
      </button>

      <CardList
        list={list}
        toFocus={toFocus}
        onItemTitleChange={setItemTitle}
        onItemToggle={toggleItem}
        onItemDelete={deleteItem}
        onReorder={reorderList}
      />
    </div>
  )
}
