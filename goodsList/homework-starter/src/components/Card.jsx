import { useEffect, useRef } from 'react';
import '../styles/Card.css';

export const Card = ({
  id,
  title,
  done,
  onTitleChange,
  onToggle,
  onDelete,
  toFocus,
  item,
}) => {
  const handleTitleChange = (event) => {
    onTitleChange(id, event.target.value);
  };

  const handleCheckboxChange = () => {
    onToggle(id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onToggle(id);
  };

  const handleTitleBlur = () => {
    if (title === '') {
      onDelete(id);
    }
  };

  const ref = useRef(null)

  useEffect(() => {
    if (item.focus && ref.current) {
      ref.current.focus()
      toFocus(id)
    }
  }, [item?.focus])

  return (
    <form className="card" onSubmit={handleSubmit}>
      <input
        className="card__done"
        type="checkbox"
        checked={done}
        onChange={handleCheckboxChange}
        tabIndex={-1}
      />

      <input
        className="card__title"
        type="text"
        value={title}
        onChange={handleTitleChange}
        onBlur={handleTitleBlur}
        ref={ref}
      />
    </form>
  );
};
