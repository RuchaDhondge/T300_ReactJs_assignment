import TodoItem from './TodoItem';

export default function TodoList({ todos, onComplete, onDelete, onUpdate }) {
  if (todos.length === 0) {
    return (
      <div className="todo-list-container">
        <p className="no-todos-msg">No todo is available</p>
      </div>
    );
  }

  return (
    <div className="todo-list-container">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onComplete={onComplete}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}
