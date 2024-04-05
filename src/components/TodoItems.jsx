import TodoItem from './TodoItem';
import styles from './TodoItems.module.css';

const TodoItems = ({todoItems}) => {
  return (
    <div className={styles['items-container']}>
      {todoItems.map (item => (
        <TodoItem todoName={item.name} todoDate={item.dueDate} />
      ))}
      {/* <TodoItem todoName="Buy Milk" todoDate="4/10/2023" />
      <TodoItem todoName="Go to College" todoDate="4/10/2023" /> */}
    </div>
  );
};

export default TodoItems;
