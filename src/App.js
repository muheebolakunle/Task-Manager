import { useState } from "react";
import Header from './components/Header';
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCheckSquare, faTimes} from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee, faCheckSquare, faTimes)

function App() {
   const [tasks, setTasks] = useState([
        {
            'id':1,
            'description': "Wash my car",
            'day' : 'Feb 5th at 2:30pm',
            'reminder': true

        },
        {
            'id':2,
            'description': "Practice some more bootstrap",
            'day' : 'Feb 5th at 1:30pm',
            'reminder': true

        },
        {
            'id':3,
            'description': "Add features to my laravel project",
            'day' : 'Feb 5th at 12:30pm',
            'reminder': true
        },
        {
            'id':4,
            'description': "Wash my car",
            'day' : 'Feb 5th at 11:30am',
            'reminder': true

        },
        {
            'id':5,
            'description': "Practice some more bootstrap",
            'day' : 'Feb 5th at 10:30am',
            'reminder': true

        },
        {
            'id':6,
            'description': "Add features to my laravel project",
            'day' : 'Feb 5th at 2:30pm',
            'reminder': true
        }
    ]);

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
      <Header title="Task Manager"/>
      <AddTask />
      <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
