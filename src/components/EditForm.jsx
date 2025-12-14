import { useState } from 'react';

function EditForm({ todo, editTodo }) {
  const [input, setInput] = useState(todo.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(todo.id, input);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">編輯</button>
    </form>
  );
}

export default EditForm;