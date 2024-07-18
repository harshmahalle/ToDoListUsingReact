import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todo, toggleCompleted, deleteToDo }) => {
  return (
    <div className="mt-4 max-h-96 overflow-y-auto">
      {/* Mapping through each todo item */}
      {todo.map((item) => (
        <ToDoItem
          key={item.id}
          id={item.id}
          text={item.text}
          completed={item.completed}
          toggleCompleted={toggleCompleted}
          deleteToDo={deleteToDo}
        />
      ))}
    </div>
  );
};

export default ToDoList;




