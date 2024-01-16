import { useEffect, useState } from "react";

export const ListTodo = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <table>
        <tr>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {todos.map((todo) => {
          return (
            <tr>
              <td>{todo.description}</td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
