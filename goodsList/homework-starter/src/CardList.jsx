import { Card } from './Card';
import './CardList.css';

export const CardList = ({
  list,
  toFocus,
  onItemTitleChange,
  onItemToggle,
  onItemDelete,
}) => {
  return (
    <ul className="card-list">
      {list.map((item) => {
        const { id, title, done } = item;

        return (
          <li key={id} className="card-list__item">
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
      })}
    </ul>

  );
};