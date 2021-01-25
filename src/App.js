import { useState } from "react";
import Header from './components/Header';
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCheckSquare, faTimes} from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee, faCheckSquare, faTimes)

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([]);
    
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1;

      const newTask = {id, ...task};
      setTasks([...tasks, newTask])
    } 

    const deleteTask = (id) => {
        const newTasks = tasks.filter((task)=> (task.id !== id));
        setTasks(newTasks); 
    }

    const toggleReminder = (id) => {
      console.log(id);
      const newArray = tasks.map((task)=> (task.id === id ? 
        {...task, reminder : !task.reminder} : task))
      console.log(newArray)
      setTasks(newArray)
    }
  return (
    <div className="container border-1">
      <Header title="Task Manager" onAddClick = {()=>{ setShowAddTask(!showAddTask)}} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder}/> : <h4 className="ml-3">No tasks to show</h4> }
    </div>
  );
}

export default App;
