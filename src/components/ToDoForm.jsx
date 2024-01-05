import { useState } from "react";

function ToDoForm ({addToDo}) {
    const [value, setValue] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addToDo(value);
        setValue("")
    }

    return (
        <form className="toDoForm" onSubmit={handleSubmit}>
            <input 
            type="text" className="todo-input" 
            value={value}
            placeholder="What are we doing today?" 
            onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" className="todo-btn"> Add task</button>
        </form>
    )
}

export default ToDoForm