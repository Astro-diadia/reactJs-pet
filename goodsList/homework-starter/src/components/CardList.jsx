import { Card } from './Card'
import '../styles/CardList.css'
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

const SortableCardItem = ({
  item,
  onItemTitleChange,
  onItemToggle,
  onItemDelete,
  toFocus,
}) => {
  const { id, title, done } = item

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <li
      className="card-list__item"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <Card
        id={id}
        title={title}
        done={done}
        onTitleChange={onItemTitleChange}
        onToggle={onItemToggle}
        onDelete={onItemDelete}
        toFocus={toFocus}
        item={item}
      />
    </li>
  )
}

export const CardList = ({
  list,
  toFocus,
  onItemTitleChange,
  onItemToggle,
  onItemDelete,
}) => {
  return (
    <ul className="card-list">
      {list.map((item) => (
        <SortableCardItem
          key={item.id}
          item={item}
          onItemTitleChange={onItemTitleChange}
          onItemToggle={onItemToggle}
          onItemDelete={onItemDelete}
          toFocus={toFocus}
        />
      ))}
    </ul>
  )
}
