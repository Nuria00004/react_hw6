import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
  
    const handleInputChange = (e) => {
      setTask(e.target.value);
    };
  
    const handleAddTask = () => {
      setTasks([...tasks, task]);
      setTask("");
    };
  
    return (
      <div className="Task">
        <h1 className='h1data'>Список задач</h1>
            <input
                className='input'
          type="text"
          placeholder="Добавить задачу"
          value={task}
          onChange={handleInputChange}
        />
        <button className='addtask' onClick={handleAddTask}>Добавить</button>
        <ol>
          {tasks.map((task, index) => (
            <li className='li' key={index}>{task}</li>
          ))}
        </ol>
      </div>
    );
  }

export default Todo
