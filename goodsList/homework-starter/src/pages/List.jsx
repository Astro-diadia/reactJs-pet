import { CardList } from '../components/CardList'
import { useList } from '../useList'
import '../styles/List.css'

export const List = () => {
  const { list, toFocus, createItem, setItemTitle, toggleItem, deleteItem, reorderList, deleteDoneItems } = useList()

  return (
    <div className="list">
      <h1>Список покупок</h1>

      <div className="list__wrapper-btns">
        <button className="list__btn" onClick={createItem}>
          Новый элемент
        </button>
        <button className="list__btn list__btn--danger" onClick={deleteDoneItems}>
          Удалить выполненные
        </button>
      </div>

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
