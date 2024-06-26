import {useContext} from 'react';
import {TodoItemsContext} from '../store/todo-items-store';
import TodoItem from './TodoItem';
import styles from './TodoItems.module.css';

// const TodoItems = ({todoItems, onDeleteClick}) => {
// const TodoItems = ({onDeleteClick}) => {
const TodoItems = () => {
  const {todoItems} = useContext (TodoItemsContext);

  return (
    <div className={styles['items-container']}>
      {todoItems.map (item => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          // onDeleteClick={onDeleteClick}
        />
      ))}
      {/* <TodoItem todoName="Buy Milk" todoDate="4/10/2023" />
      <TodoItem todoName="Go to College" todoDate="4/10/2023" /> */}
    </div>
  );
};

export default TodoItems;
