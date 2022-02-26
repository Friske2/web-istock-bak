import { useState } from "react";
import { ItemsList } from "./interface";
function useTodo(value: ItemsList[]) {
  let [items, setItems] = useState<ItemsList[]>(value);
  function addTodo(item: string) {
    const index: number = items.length + 1;
    items.unshift({
      id: index,
      text: item,
    })
    setItems(
      [...items]
    );
  }
  function deleteTodo(id: number) {
    const index: number = items.findIndex((item) => item.id === id);
    items.splice(index, 1);
    setItems([...items]);
  }
  return {
    items,
    addTodo,
    deleteTodo
  }
}

export default useTodo