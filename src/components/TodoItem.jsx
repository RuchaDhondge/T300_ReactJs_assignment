import { useState } from 'react';

export default function TodoItem({ todo, onComplete, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.description);

  function handleEditStart() {
    setEditText(todo.description);
    setIsEditing(true);
  }

  function handleConfirm() {
    onUpdate(todo.id, editText);
    setIsEditing(false);
  }

  function handleCancel() {
    setEditText(todo.description);
    setIsEditing(false);
  }

  return (
    <div className="todo-item">
      {isEditing ? (
        <div className="edit-group">
          <label htmlFor={`edit-${todo.id}`} className="visually-hidden">
            Edit todo
          </label>
          <input
            id={`edit-${todo.id}`}
            className="edit-input"
            type="text"
            value={editText}
            onChange={(event) => setEditText(event.target.value)}
          />
          <button type="button" className="btn-confirm" onClick={handleConfirm}>
            Confirm
          </button>
          <button type="button" className="btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            disabled={todo.isCompleted}
            onChange={() => onComplete(todo.id)}
            aria-label={`Toggle completion for ${todo.description || 'todo item'}`}
          />
          <span className={`todo-text ${todo.isCompleted ? 'completed' : ''}`}>
            {todo.description}
          </span>
          <div className="todo-actions">
            {!todo.isCompleted && (
              <button type="button" className="btn-edit" onClick={handleEditStart}>
                Edit
              </button>
            )}
            {todo.isCompleted && (
              <button
                type="button"
                className="btn-delete"
                onClick={() => onDelete(todo.id)}
              >
                Delete
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
