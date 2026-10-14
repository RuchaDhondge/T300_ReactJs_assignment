import { useState } from 'react';

export default function TodoInput({ onAddTodo }) {
  const [description, setDescription] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onAddTodo(description);
    setDescription('');
  }

  return (
    <form className="todo-input-card" onSubmit={handleSubmit}>
      <label htmlFor="new-todo" className="visually-hidden">
        Todo description
      </label>
      <div className="input-group">
        <span className="input-icon" aria-hidden="true">
          T
        </span>
        <input
          id="new-todo"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Enter todo description"
        />
      </div>
      <button type="submit" className="btn-add">
        Add Todo
      </button>
    </form>
  );
}
