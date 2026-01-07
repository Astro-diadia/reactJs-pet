import { useState } from 'react';

export function useList() {
  const [list, setList] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("shopping-list")) || []
    return saved.filter(item => item.title.trim() !== "");
  })

  /** Создать новый элемент. */
  const createItem = () => {
    const newItem = { id: Date.now(), title: '', done: false, focus: true }

    setList(prev => {
      const updated = [newItem, ...prev]
      localStorage.setItem("shopping-list", JSON.stringify(updated))
      return updated
    })
  }

  const toFocus = (id) => {
    setList(prev =>
      prev.map(it =>
        it.id === id ? { ...it, focus: false } : it
      )
    )
  }

  /**
   * Установить заголовок элемента.
   *
   * @param id - ID элемента.
   * @param title - Заголовок элемента.
   */
  const setItemTitle = (id, title) => {
    setList(prev => {
      const updated = prev.map(item => {
        if (item.id !== id) return item
        return { ...item, title: title }
      })
      localStorage.setItem("shopping-list", JSON.stringify(updated))
      return updated
    })
  };

  /**
   * Переключить выполненность элемента.
   *
   * @param id - ID элемента.
   */
  const toggleItem = (id) => {
    setList(prev => {
      const updated = prev.map(item => {
        if (item.id !== id) return item
        return { ...item, done: !item.done }
      })
      localStorage.setItem("shopping-list", JSON.stringify(updated))
      return updated
    })
  }

  /**
   * Удалить элемент.
   *
   * @param id - ID элемента.
   */
  const deleteItem = (id) => {
    setList(prev => {
      const updated = prev.filter(item => item.id !== id)
      localStorage.setItem("shopping-list", JSON.stringify(updated))
      return updated
    })
  };

  return {
    list,
    toFocus,
    createItem,
    setItemTitle,
    toggleItem,
    deleteItem,
  };
}
