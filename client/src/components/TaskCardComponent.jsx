import React, { useState } from 'react';



const TaskCardComponent = ({ task }) => {
    const TaskStatus = ["pending", "in-progress", "completed"];
    const [taskInput, setTaskInput] = useState({ ...task });
    const [isEdit, setIsEdit] = useState(false);

    const handleEdit = () => {
        setIsEdit(true);
    };

    const handleSave = () => {
        setIsEdit(false);
    };

    const handleDelete = () => {
    };

    return (
        <div className={"task " + taskInput.status}>
            <div>
                {!isEdit ? (
                    <div className='task-title'>{taskInput.title}</div>
                ) : (
                    <div className='row-div'>
                        <textarea
                            className="task-title change"
                            placeholder="Title..."
                            value={taskInput.title}
                            onChange={(e) =>
                                setTaskInput({ ...taskInput, title: e.target.value })
                            }
                        />
                    </div>
                )}
                {!isEdit ? (
                    <div className='task-description'>{taskInput.description}</div>
                ) : (
                    <textarea
                        className="task-description change"
                        placeholder="Description..."
                        value={taskInput.description}
                        onChange={(e) =>
                            setTaskInput({ ...taskInput, description: e.target.value })
                        }
                    />
                )}
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
                {!isEdit ? (
                    <button className='edit btn' onClick={handleEdit}>Edit</button>
                ) : (
                    <div>
                        <button className='save btn' onClick={handleSave}>Save</button>
                        <button className='delete btn' onClick={handleDelete}>Delete</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TaskCardComponent;