import { useState } from "react";

function AddTask({onAdd}) {
    const [description, setDescription] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault() 

        if(!description){
            alert("Please add a task");
        }

        onAdd({description, day, reminder});

        //Reset the state
        setDescription('');
        setDay('')
        setReminder(false)

    }

    return (
        <form className="m-2" onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="addDescription" >Add Description</label>
                <input className="form-control form-control-lg" type="text"  placeholder="Add Description" value={description} onChange={(e)=>{setDescription(e.target.value)}} />
            </div>

            <div className="form-group">
                <label htmlFor="addDay">Add Day</label>
                <input className="form-control form-control-lg" type="text"  placeholder="Add Day" value={day}  onChange={(e)=>{setDay(e.target.value)}}/>
            </div>

            <div className="form-check">
                <input className="form-check-input form-check-input-lg" type="checkbox" value={reminder} onChange={(e)=>{setReminder(e.currentTarget.checked)}} />
                <label className="form-check-label" htmlFor="reminder" >Set Reminder</label>

            </div>

            <div className="form-group mt-2 mb-5">
                <input className="btn btn-primary form-control" type="submit" value="Save Task"/>
            </div>
            
        </form>
    )
}

export default AddTask
