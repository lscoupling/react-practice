import { MdEdit, MdDelete } from 'react-icons/md';
import EditForm from './EditForm';

function Todo({ todo, deleteTodo, toggleCompleted, toggleIsEditing, editTodo }) {
  return (
    <div>
      {todo.isEditing ? (
        <EditForm todo={todo} editTodo={editTodo} />
      ) : (
        <div className="todo">
          <span onClick={() => toggleCompleted(todo.id)} className={todo.isCompleted ? 'completed' : ''}>
            {todo.content}
          </span>
          <MdEdit onClick={() => toggleIsEditing(todo.id)} />
          <MdDelete onClick={() => deleteTodo(todo.id)} />
        </div>
      )}
    </div>
  );
}

export default Todo;