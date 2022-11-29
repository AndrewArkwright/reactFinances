import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: "car payment",
            cost: 250,
            day: "Feb 5th",
        },
        {
            id: 2,
            text: "anime",
            cost: 100,
            day: "Feb 6th",
        },
        {
            id: 3,
            text: "games",
            cost: 40,
            day: "Feb 7th",
        }
    ]
  )

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : "No Costs To Show"}
    </div>
  );
}

export default App;