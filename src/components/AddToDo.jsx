import React from 'react';

const AddToDo = ({ submitHandler, newTask, setNewTask, filter, handleFilterChange }) => {
  return (
    <div className="mt-4">
      {/* Form for Adding New Task */}
      <form onSubmit={submitHandler} className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Add a new task"
          className="py-2 px-4 border border-gray-300 rounded-md mr-2 focus:outline-none focus:border-blue-500 flex-grow"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none transition duration-300"
        >
          Add
        </button>
      </form>

      {/* Filter Dropdown */}
      <select
        value={filter}
        onChange={handleFilterChange}
        className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none transition duration-300"
      >
        <option value="all">All Tasks</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
};

export default AddToDo;
