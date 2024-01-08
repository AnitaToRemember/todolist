import { useState } from "react";

function EditToDoForm ({editToDo, task}) {
    // State to manage the input value
    const [value, setValue] = useState(task.task);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Call the editToDo function to update the task
        editToDo(value, task.id);

        // Reset the input value
        setValue("");
    };

    // Render the edit ToDo form
    return (
        <form className="toDoForm" onSubmit={handleSubmit}>
            {/* Input field for updating the task */}
            <input 
                type="text" 
                className="todo-input" 
                value={value}
                placeholder="Update task" 
                onChange={(e) => setValue(e.target.value)}
            />
            {/* Button to submit the form and update the task */}
            <button type="submit" className="todo-btn">Update task</button>
        </form>
    );
}

export default EditToDoForm;
