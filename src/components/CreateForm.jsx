import { useState } from 'react';

function CreateForm({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-form">
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">新增</button>
    </form>
  );
}

export default CreateForm;