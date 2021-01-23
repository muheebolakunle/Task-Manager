import Task from "./Task";

function Tasks({tasks, onDelete, onToggle}) {
   
    return (
        <div className="tasks mx-auto">
            {tasks.map((task) => { return <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>})}
        </div>
    )
}

export default Tasks
