import { useState, useEffect } from "react";
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

  useEffect(()=>{
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, [])

  //Fetch all tasks
  const fetchTasks = async ()=> {
    let res = await fetch('http://localhost:5000/tasks')
    let data = await res.json();
    return data;
  }

  //Fetch Single task by ID
  const fetchTask = async (id)=> {
    let res = await fetch(`http://localhost:5000/tasks/${id}`)
    let data = await res.json();
    return data;
  }
    
    const addTask = async (task) => {
      // const id = Math.floor(Math.random() * 10000) + 1;
      const res = await fetch('http://localhost:5000/tasks', {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })

      const currentTasks = await fetchTasks()
      setTasks(currentTasks)
    } 

    const deleteTask = async (id) => {
        // const newTasks = tasks.filter((task)=> (task.id !== id));
        // setTasks(newTasks); 
        await fetch(`http://localhost:5000/tasks/${id}`, {
          method: "DELETE"
        })
        const currentTasks = await fetchTasks()
        setTasks(currentTasks)
    }

    const toggleReminder = async (id) => {
      // console.log(id);
      // const newArray = tasks.map((task)=> (task.id === id ? 
      //   {...task, reminder : !task.reminder} : task))
      // console.log(newArray)
      // setTasks(newArray)

      const task = await fetchTask(id)
      const updTask =  {...task, reminder : !task.reminder}

      const response = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updTask)
      })

      const data = await response.json()
      console.log(data)

      const newArray = tasks.map((task)=> (task.id === id ? 
       {...task, reminder : data.reminder} : task))
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
