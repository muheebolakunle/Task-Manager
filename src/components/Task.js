import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Task({task, onDelete, onToggle }) {
    // eslint-disable-next-line
    const {description, id, day, reminder} = task;
    return (
        <div className={`${reminder ? 'reminder' : ''} d-flex justify-content-between m-3 align-items-center bg-light py-2 px-3`} >
            <div className="w-70" onDoubleClick= {() => onToggle(id)}>
                <h3>{description}</h3>
                <h5>{day}</h5>
            </div>
            <FontAwesomeIcon icon="times" color="red" size='2x' onClick ={()=> onDelete(id)}style={{cursor:'pointer'}} />
        </div>
    )
}

export default Task
