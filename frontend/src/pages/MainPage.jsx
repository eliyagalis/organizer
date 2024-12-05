import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TaskCard from '../components/TaskCard';

const MainPage = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{
            setTasks(res.data);
        })
        .catch((err)=>console.log(err));
    },[]);
    
    const findTask = async(id) =>{
        try
        {
            const erased = tasks.find((res)=>
                res.id === id);
            console.log("found it", erased.id);
        }
        catch(error){
            console.log(error);
        }
    }

    return (
    <div>
        <div className='task-panel'>
            <h1>My tasks</h1>
            {
                tasks.length>0?(
                    <div className='grey-space'>
                        <div className='tasks-space'>
                            {
                                tasks.map((t) =>(
                                <TaskCard description={t.title} key={t.id} id={t.id} findTask={findTask}/>
                            ))
                        }
                        </div>
                    </div>
                ):(
                    <div>no tasks...</div>
            )}
        </div>
    </div>
  )
}

export default MainPage