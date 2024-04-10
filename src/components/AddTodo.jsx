import {useContext, useRef, useState} from 'react';
import styles from './AddTodo.module.css';
import {IoMdAddCircle} from 'react-icons/io';
import {TodoItemsContext} from '../store/todo-items-store';

// function AddTodo({onNewItem}) {
function AddTodo () {
  // const [todoName, setTodoName] = useState ('');
  // const [dueDate, setDueDate] = useState ('');
  const todoNameElement = useRef ();
  const todoDueDateElement = useRef ();

  const contextObj = useContext (TodoItemsContext);
  const addNewItem = contextObj.addNewItem;

  // const handleNameChange = event => {
  //   // console.log (event.target.value);
  //   setTodoName (event.target.value);
  //   noOfUpdates.current += 1;
  // };

  // const handleDateChange = event => {
  //   // console.log (event.target.value);
  //   setDueDate (event.target.value);
  //   console.log (`noOfUpdates are: ${noOfUpdates.current}`);
  // };

  const handleAddButtonClicked = event => {
    event.preventDefault ();
    const todoName = todoNameElement.current.value;
    const dueDate = todoDueDateElement.current.value;
    todoNameElement.current.value = '';
    todoDueDateElement.current.value = '';
    addNewItem (todoName, dueDate);
    // onNewItem (todoName, dueDate);
    // setTodoName ('');
    // setDueDate ('');
  };

  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            className={styles['input-box']}
            placeholder="Enter Todo Here"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoDueDateElement}
            className={styles['input-box']}
            // value={dueDate}
            // onChange={handleDateChange}
          />
        </div>
        <div className="col-1">
          <button type="submit" className="btn btn-success kg-button">
            {/* onClick={handleAddButtonClicked} */}
            <IoMdAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
