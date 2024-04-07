import {useState} from 'react';
import styles from './AddTodo.module.css';

function AddTodo({onNewItem}) {
  const [todoName, setTodoName] = useState ('');
  const [dueDate, setDueDate] = useState ('');

  const handleNameChange = event => {
    // console.log (event.target.value);
    setTodoName (event.target.value);
  };

  const handleDateChange = event => {
    // console.log (event.target.value);
    setDueDate (event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem (todoName, dueDate);
    setTodoName ('');
    setDueDate ('');
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            className={styles['input-box']}
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className={styles['input-box']}
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-1">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
