import { useState } from 'react';
import Todo from './Todo';
import CreateForm from './CreateForm';

function TodoWrapper() {
  const [todos, setTodos] = useState(() => [
    { id: Math.random(), content: '第一個任務', isCompleted: false, isEditing: false },
    { id: Math.random(), content: '第二個任務', isCompleted: false, isEditing: false }
  ]);

  const addTodo = (content) => {
    setTodos([...todos, { id: Math.random(), content, isCompleted: false, isEditing: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
  };

  const toggleIsEditing = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
  };

  const editTodo = (id, newContent) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, content: newContent, isEditing: false } : todo));
  };

  return (
    <div className="wrapper">
      <h1>Todo App</h1>
      <CreateForm addTodo={addTodo} />
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} toggleIsEditing={toggleIsEditing} editTodo={editTodo} />
      ))}
    </div>
  );
}

export default TodoWrapper;