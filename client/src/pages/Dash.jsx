import TasksList from '../features/tasks/TasksList'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'

const Dash = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div>
        <h1>Dashboard</h1>
        <Sidebar />
        <TasksList project={{ _id: "6762a27ed336615d53d06444" }} />
    </div>
  )
}

export default Dash