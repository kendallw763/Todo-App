import Todo from "./Components/Todo";
import Form from "./Components/Form";
import FilterButton from "./Components/FilterButton";
import { useState } from "react";
import {nanoid} from "nanoid";


function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

 
function toggleTaskCompleted(id){
  const updatedTasks = tasks.map((task) => {
    if(id === task.id){
      return{...task, completed: !task.completed};
    }
      return task;
    });
    setTasks(updatedTasks);
  }

function deleteTask(id){
   const remainingTasks = tasks.filter((task) => id !== task.id);
   setTasks(remainingTasks);
  }

  const taskList = tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
    
  ));

  function addTask(name) {
  const newTask = {id: `todo-${nanoid()}`, name, completed: false};
  setTasks([...tasks, newTask]);
   
  }

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1> Todo Success Planner</h1> <br></br>
      <h3><bd>"Weather you think you can, or you think you cannot -- You're right" </bd>
        <br></br>
        <br></br>
      ~ Henry Ford</h3>

      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">
        <FilterButton name="All" isSelected={true}/>
        <FilterButton name="Active" isSelected={false}/>
        <FilterButton name="Completed" isSelected={false} />
      </div>

      <h2 id="list-heading"> {headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
       {taskList}
        
      </ul>
    </div>
  );
}

export default App;
