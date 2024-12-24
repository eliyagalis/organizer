import React from 'react'
import TaskCard from './TaskCard';

const TasksPanel = ({ 
  tasks, 
  isAddingNew, 
  isLoading, 
  addBlankTaskEvent, 
  saveTask, 
  deleteTask 
}) => {
  return (
    <div className="panel">
                    <div className="panel-bar">
                        <div className="title">Project 1</div>
                        <button className="btn show-done">Show Done</button>
                    </div>
                    <button
                        className={!isAddingNew ? 'btn' : 'btn disable'}
                        onClick={!isAddingNew ? addBlankTaskEvent : null}
                        disabled={isAddingNew}
                    >
                        + Add Task
                    </button>
                    <div className="tasks-space">
                        {tasks.length === 0 && isLoading ? (
                            <p>Add new task</p>
                        ) : (
                            tasks.map((t) => (
                                <TaskCard
                                    key={t._id}
                                    _id = {t._id}
                                    title={t.title}
                                    description={t.description}
                                    saveTask={(updatedTask) => saveTask({ ...updatedTask})}
                                    deleteTask={() => deleteTask(t)}
                                    status={t.status}
                                />
                            ))
                        )}
                    </div>
                </div>
  )
}

export default TasksPanel