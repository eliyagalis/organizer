import React, { useEffect, useState } from "react";

const TaskCard = ({ title, description, status, saveTask }) => {
  const TaskStatus = ["pending", "in-progress", "completed"];
  const [taskInput, setTaskInput] = useState({ title, description, status });
  const [isChanged, setIsChanged] = useState(false);

  // Detect changes in taskInput
  useEffect(() => {
    if (
      taskInput.title !== title ||
      taskInput.description !== description ||
      taskInput.status !== status
    ) {
      setIsChanged(true);
    } else {
      setIsChanged(false);
    }
  }, [taskInput]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    saveTask(taskInput); // Call saveTask with updated data
    setIsChanged(false); // Reset change state
  };

  // Handle cancel edit
  const cancelEdit = () => {
    setTaskInput({ title, description, status }); // Reset to original values
    setIsChanged(false);
  };

  return (
    <div className={taskInput.status + " task"}>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            type="text"
            className={isChanged ? "task-title change" : "task-title"}
            placeholder="Title..."
            value={taskInput.title}
            onChange={(e) =>
              setTaskInput({ ...taskInput, title: e.target.value })
            }
          />
        </div>

        <div>
          <textarea
            type="text"
            className={isChanged ? "task-description change" : "task-description"}
            placeholder="Describe the task..."
            value={taskInput.description}
            onChange={(e) =>
              setTaskInput({ ...taskInput, description: e.target.value })
            }
          />
        </div>

        <div className="task-status">
          <b>Status: </b>
          <select
            id="status"
            className={isChanged ? "task-status change" : "task-status"}
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
        </div>

        <br />
        <div className="task-bottom">
          <span>2 days ago.</span>
          {isChanged && (
            <>
              <button type="submit" className="btn">
                Save
              </button>
              <button type="button" className="btn" onClick={cancelEdit}>
                Cancel
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default TaskCard;
