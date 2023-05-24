import React, { useState } from 'react';
import LoggedInUser from './LoggedInUser';
import style from './Form.module.css'

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    const newTask = event.target.task.value;
    const taskItem = {
      id: Date.now(),
      title: newTask,
    };
    addTask(taskItem);
    event.target.task.value = '';
  };

  const [taskInput, setTaskInput] = useState('');

  const handleChange = (event) => {
    setTaskInput(event.target.value);
  };

  const editTask = (taskId) => {
    // Implement your logic to handle task editing
  };

  return (
    <div>
      <h1>Tasks To Do </h1>
      <LoggedInUser/>
      <form onSubmit={handleAddTask}>
        <input type="text" value={taskInput} onChange={handleChange} name="task" />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
         <h3> <li key={task.id}>
           {task.title}
            <button className={style.btn1} onClick={() => deleteTask(task.id)}>X</button>
            <button  className={style.btn2} onClick={() => editTask(task.id)}>Edit</button>
          </li></h3>
        ))}
      </ul>
    </div>
  );
};

export default TaskPage;
