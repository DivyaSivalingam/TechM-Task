import { useState } from "react";
 export default function  DisplayTask() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Build a Todo List", done: false },
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
  };

  return (
    <div>
      <h1>Todo List</h1>
      {tasks.map(task => (
        <div key={task.id} onClick={() => toggleTask(task.id)}>
          <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
            {task.text}
          </span>
        </div>
      ))}
    </div>
  );
};