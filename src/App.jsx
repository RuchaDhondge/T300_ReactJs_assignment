import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const orderedTodos = [
    ...todos.filter((todo) => todo.isCompleted),
    ...todos.filter((todo) => !todo.isCompleted),
  ];

  const filteredTodos = orderedTodos.filter((todo) => {
    if (selectedFilter === 'completed') {
      return todo.isCompleted;
    }

    if (selectedFilter === 'pending') {
      return !todo.isCompleted;
    }

    return true;
  });

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
        todo.id === todoId && !todo.isCompleted
          ? { ...todo, isCompleted: true }
          : todo,
      ),
    );
  }

  function handleDeleteTodo(todoId) {
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this completed todo?',
    );

    if (!isConfirmed) {
      return;
    }

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
      <TodoList
        todos={filteredTodos}
        onComplete={handleCompleteTodo}
        onDelete={handleDeleteTodo}
        onUpdate={handleUpdateTodo}
      />
      {todos.length > 0 && (
        <TodoFilter
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />
      )}
    </div>
  );
}