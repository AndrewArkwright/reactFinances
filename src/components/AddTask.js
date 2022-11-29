import { useState } from "react"

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("")
  const [cost, setCost] = useState("")
  const [day, setDay] = useState("")

  const onSubmit = (e) => {
    e.preventDefault() //so it does not submit to a page

    if (!text) {
        alert("Please add a task")
        return
    }
    if (!cost) {
      alert("Please add a cost")
      return
  }
    if (!day) {
        alert("Please add a day and time")
        return
    }

    onAdd({ text, cost, day })
    setText("")
    setCost("")
    setDay("")
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Cost</label>
            <input type="number" placeholder="Add Cost Per Month" value={cost} onChange={(e) => setCost(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Day</label>
            <input type="text" placeholder="Add Date" value={day} onChange={(e) => setDay(e.target.value)}/>
        </div>

        <input type="submit" value="Add Task" className="btn btn-block"/>
    </form>
  )
}

export default AddTask