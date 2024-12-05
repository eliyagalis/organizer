import React, { useEffect, useState } from 'react'

const TaskCard = ({id, description, findTask}) => {
  
    return (
        <div className='task-card'>
            <p>{description}</p>
            <button onClick={()=>findTask(id)}>erase</button>
        </div>        
  )
}

export default TaskCard