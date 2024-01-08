import { useState } from "react";
import "../styles/components/ToDoForm.css"

function ToDoForm({ addToDo }) {
    // State to manage the input value
    const [value, setValue] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Call the addToDo function to add a new task
        addToDo(value);

        // Reset the input value
        setValue("");
    };

    return (
        <form className="toDoForm" onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="todo-input" 
                value={value}
                placeholder="What are we doing today?" 
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="todo-btn"> Add task</button>
        </form>
    );
}

export default ToDoForm;
