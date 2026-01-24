import { useState } from "react"
import { arrayMove } from "@dnd-kit/sortable"

export function useList() {
  const [list, setList] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("shopping-list")) || []
    return saved.filter(item => item.title.trim() !== "");
  })

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

  const deleteItem = (id) => {
    setList(prev => {
      const updated = prev.filter(item => item.id !== id)
      localStorage.setItem("shopping-list", JSON.stringify(updated))
      return updated
    })
  }

  const reorderList = (oldIndex, newIndex) => {
    setList((items) => {
      const newItems = arrayMove(items, oldIndex, newIndex)
      localStorage.setItem("shopping-list", JSON.stringify(newItems))
      return newItems
    })
  }

  return {
    list,
    toFocus,
    createItem,
    setItemTitle,
    toggleItem,
    deleteItem,
    reorderList,
  };
}
