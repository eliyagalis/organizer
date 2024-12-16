import React, { useEffect, useState } from 'react'

const TaskCard = ({id,title,description,status}) => {
  

    return (
        <div className={status + " task"}>
            <div className='task-title'>
                {title}
            </div>
            <div className='task-description'>
                {description}
            </div>
            <div className="">
                <b>Status: {status}</b>
            </div>
            <br/>
            <div className='task-days'>
                2 days ago
            </div>
        </div>
  )
}

export default TaskCard