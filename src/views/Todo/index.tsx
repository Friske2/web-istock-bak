import FormTodo from "./FormTodo";
import ListTodo from "./ListTodo";
import useTodo from "./hook";
import { success } from "../../components/Message";
function Todo() {
  const { items, addTodo, deleteTodo } = useTodo([
    {
      id: 1,
      text: "Learn React",
    },
  ]);
  function handleAddTodo(val: string) {
    addTodo(val);
    success("Add success");
  }
  function handleDelete(val: number) {
    deleteTodo(val);
    success("Delete success");
  }
  return (
    <div className="m-2">
      <FormTodo funcAdd={handleAddTodo}></FormTodo>
      <div className="my-2">
        <ListTodo funcDelete={handleDelete} items={items}></ListTodo>
      </div>
    </div>
  );
}

export default Todo;
