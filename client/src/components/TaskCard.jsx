import React, { useEffect, useState } from 'react';

const TaskCard = ({ title = "", description = "", status = "", saveTask }) => {
  const TaskStatus = [
    "",
    "PENDING",
    "IN_PROGRESS",
    "COMPLETED",
  ];

  const [taskInput, setTaskInput] = useState({ title, description, status });
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    if (
      taskInput.title !== title ||
      taskInput.description !== description ||
      taskInput.status !== status ||
      !title
    ) {
      setIsChanged(true);
    }
  }, [taskInput, title, description, status]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log(taskInput);
    saveTask(taskInput); // Call saveTask with updated data
  };

  return (
    <div className={taskInput.status + " task"}>
      {/* Wrap the content in a form */}
      <form onSubmit={handleSubmit}>
        {/* Title Input */}
        <div className="task-title">
          <input
            type="text"
            className={!isChanged ? 'task-title' : 'task-title change'}
            placeholder='Title...'
            value={taskInput.title}
            onChange={(e) =>
              setTaskInput({ ...taskInput, title: e.target.value })
            }
          />
        </div>

        {/* Description Input */}
        <div className="task-description">
          <input
            type="text"
            className={!isChanged ? 'task-description' : 'task-description change'}
            placeholder='Describe the task...'
            value={taskInput.description}
            onChange={(e) =>
              setTaskInput({ ...taskInput, description: e.target.value })
            }
          />
        </div>

        {/* Status Dropdown */}
        <div className="task-status">
          <b>Status: </b>
          <select
            id="status"
            className={!isChanged ? 'task-status' : 'task-status change'}
            value={taskInput.status}
            onChange={(e) =>
              setTaskInput({ ...taskInput, status: e.target.value })
            }
          >
            {Object.entries(TaskStatus).map(([key, value]) => (
              <option key={key} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

        {/* Bottom Section */}
        <br />
        <div className="task-bottom">
          2 days ago
          {isChanged ? (
            <button type="submit" className='btn'>
              Save
            </button>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default TaskCard;
