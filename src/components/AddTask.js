
function AddTask() {
    return (
        <form className="m-2">
            <div className="form-group">
                <label htmlFor="addText" >Add Text</label>
                <input className="form-control form-control-lg" type="text" name="add text" id="addText" placeholder="Add Text" />
            </div>

            <div className="form-group">
                <label htmlFor="addDay">Add Day</label>
                <input className="form-control form-control-lg" type="text" name="add day" id="addDay" placeholder="Add Day" />
            </div>

            <div className="form-check">
                <input className="form-check-input form-check-input-lg" type="checkbox" name="add text" id=""  />
                <label className="form-check-label" htmlFor="reminder" >Set Reminder</label>

            </div>

            <div className="form-group mt-2 mb-5">
                <input className="btn btn-primary form-control" type="submit" value="Save Task"/>
            </div>
            
        </form>
    )
}

export default AddTask
