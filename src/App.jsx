import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(description) {
    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: crypto.randomUUID(),
        description,
        isCompleted: false,
      },
    ]);
  }

  function handleCompleteTodo(todoId) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== todoId));
  }

  function handleUpdateTodo(todoId, nextDescription) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === todoId ? { ...todo, description: nextDescription } : todo,
      ),
    );
  }

  return (
    <div className="app-container">
      <h2>TodoInput</h2>
      <TodoInput onAddTodo={handleAddTodo} />
      <h2>TodoList</h2>
      <div className="todo-list-container">
        {todos.length === 0 ? (
          <p className="no-todos-msg">No todo is available</p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onComplete={handleCompleteTodo}
              onDelete={handleDeleteTodo}
              onUpdate={handleUpdateTodo}
            />
          ))
        )}
      </div>
    </div>
  );
}