import { useState } from "react";
import Header from "./components/Header";
import todoData from "./data";
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [todo, setToDo] = useState(todoData);

  const submitHandler = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setToDo([
        ...todo,
        { id: Date.now(), text: newTask, completed: false }
      ]);
      toast.success('Task added successfully!');
      setNewTask('');
    }
  };

  const toggleCompleted = (id) => {
    setToDo(
      todo.map((item) => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteToDo = (id) => {
    setToDo(
      todo.filter((item) => item.id !== id)
    );
    toast.error('Task deleted successfully!');
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-purple-500 py-10">
      <Header />
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mt-6">
        <AddToDo
          submitHandler={submitHandler}
          newTask={newTask}
          setNewTask={setNewTask}
          filter={filter}
          handleFilterChange={handleFilterChange}
        />
        <ToDoList
          todo={todo.filter((item) => 
            filter === 'all' ? true : filter === 'completed' ? item.completed : !item.completed
          )}
          toggleCompleted={toggleCompleted}
          deleteToDo={deleteToDo}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;



