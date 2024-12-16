import React, { useEffect, useState } from 'react'

const TaskCard = () => {
  
    return (
        <div className='task'>
            <div className='task-title'>
                Product presentation
            </div>
            <div className='task-description'>
                Make a presentation about organization to present it on Thursday.
            </div>
            <div className='task-status'>
                <b>Status:</b>
            </div>
            <br/>
            <div className='task-days'>
                2 days ago
            </div>
        </div>
  )
}

export default TaskCard