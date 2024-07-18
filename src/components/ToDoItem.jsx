import React from 'react';

const ToDoItem = ({ id, text, completed, toggleCompleted, deleteToDo }) => {
  return (
    <div className={`flex items-center justify-between p-4 mb-4 bg-white shadow-md rounded-md transition transform duration-300 ${completed ? 'opacity-50 line-through' : 'opacity-100'} hover:scale-105`}>
      {/* Checkbox for task completion */}
      <input
        type='checkbox'
        checked={completed}
        onChange={() => toggleCompleted(id)}
        className='mr-4 h-6 w-6 text-blue-500 focus:ring-blue-400'
      />
      {/* Task text */}
      <p className={`flex-grow text-lg ${completed ? 'text-gray-500' : 'text-gray-900'}`}>{text}</p>
      {/* Delete button */}
      <button
        onClick={() => deleteToDo(id)}
        className='py-1 px-3 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none transition duration-300'
      >
        Delete
      </button>
    </div>
  );
};

export default ToDoItem;



