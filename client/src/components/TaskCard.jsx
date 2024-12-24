import { useEffect, useState } from 'react'

const TaskCard = ({_id, title = "", description = "", status = "pending" ,saveTask, deleteTask}) => {
  const TaskStatus = ["pending", "in-progress", "completed"];
  const [taskInput, setTaskInput] = useState({ _id: "", title: "", description: "", status: ""});
  const [isEdit, setIsEdit] = useState(false);

  const deleteHandler = (e)=>{
    e.preventDefault();
    if(!isEdit){
      return;
    }
    setIsEdit(false);
    deleteTask();
  }

  useEffect(() => {
    if (!title) {
      setIsEdit(true);
    }
    setTaskInput({...taskInput, _id, title, description, status})
  }, [])
  
  const saveHandler = (e)=> {
    e.preventDefault();
    if (!taskInput.title) {
      alert('Task title is required');
    }
    const editState = isEdit;
    setIsEdit(!editState);
    saveTask(taskInput);
  }

  return (
    <div className={"task " + taskInput.status}>
      <div>
        {!isEdit?
        (<div className='task-title'>{taskInput.title}</div>):
        (<div className='row-div'>
          <textarea type="text"
            className="task-title change"
            placeholder="Title..."
            value={taskInput.title}
            onChange={(e) =>
              setTaskInput({ ...taskInput, title: e.target.value })
            }
           />
        </div>)  
        }
      </div>
      {/* <div>
        {
          isEdit?(<span>
            {
              isEdit?
            }
            </span>):null
        }
      </div> */}
      <div>
      {!isEdit?
        (<div className='task-description'>{taskInput.description}</div>):
        (<textarea type="text"
            className="task-description change"
            placeholder="Description..."
            value={taskInput.description}
            onChange={(e) =>
              setTaskInput({ ...taskInput, description: e.target.value })
            }
           />)}
      </div>
      <div className='row-div'>
        <b>Status:</b>
        <div className="task-status">
          {!isEdit ? (
          <span>{taskInput.status}</span>
          ) : (
          <select
            id="status"
            className="task-status change"
            value={taskInput.status}
            onChange={(e) =>
              setTaskInput({ ...taskInput, status: e.target.value })
            }
          >
            {TaskStatus.map((st, index) => (
              <option key={index} value={st}>
              {st}
              </option>
              ))}
          </select>
          )}
        </div>
      </div>
      <div className='task-buttons'>
        {
          !isEdit?
          (<button className='edit btn' onClick={saveHandler}>Edit</button>
          
          ):(
            <div>
              <button className='save btn' onClick={saveHandler}>Save</button>
              <button className='delete btn' onClick={deleteHandler}>delete</button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default TaskCard;