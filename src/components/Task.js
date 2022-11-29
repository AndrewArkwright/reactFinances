import { FaTimes } from "react-icons/fa"

const Task = ({ task, onDelete}) => {
  return (
    <div>
        <h3>{task.text} <FaTimes style={{color: "red", cursor: "pointer"}} onClick={onDelete}/> </h3>
        <span>${task.cost}</span>
        <p>{task.day}</p>
    </div>
  )
}

export default Task