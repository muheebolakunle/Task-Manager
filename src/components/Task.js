import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Task({task, onDelete }) {
    const {description, id, day, reminder} = task;
    return (
        <div className="d-flex justify-content-between m-3 align-items-center border border-primary py-2 px-3">
            <div>
                <h3>{description}</h3>
                <h5>{day}</h5>
            </div>
            <FontAwesomeIcon icon="times" color="red" size='2x' onClick ={()=> onDelete(id)} />
        </div>
    )
}

export default Task
