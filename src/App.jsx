import AddTodo from './components/AddTodo';
import AppName from './components/AppName';
import './App.css';
import TodoItems from './components/TodoItems';
import {useState} from 'react';
import WelcomeMessage from './components/WelcomeMessage';

function App () {
  const initialTodoItems = [
    {
      name: 'Buy Milk',
      dueDate: '4/10/2023',
    },
    {
      name: 'Go to College',
      dueDate: '4/10/2023',
    },
    {
      name: 'Like this video',
      dueDate: '5/4/2023',
    },
  ];

  const [todoItems, setTodoItems] = useState ([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log (`New Item Added: ${itemName} Date: ${itemDueDate}`);
    // const newItemAdded = {name: itemName, dueDate: itemDueDate};
    // setTodoItems ([...todoItems, newItemAdded]);

    setTodoItems (currValue => {
      const newItemAdded = [
        ...currValue,
        {name: itemName, dueDate: itemDueDate},
      ];
      return newItemAdded;
    });
  };

  const handleDeleteItem = todoItemName => {
    // console.log (`Item Deleted: ${todoItemName}`);
    const newTodoItems = todoItems.filter (item => item.name !== todoItemName);
    setTodoItems (newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems
        key={todoItems}
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      />
    </center>
  );
}

export default App;
