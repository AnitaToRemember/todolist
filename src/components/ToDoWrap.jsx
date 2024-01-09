import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';  
import ToDoForm from "./toDoForm";
import ToDo from "./ToDo";
import EditToDoForm from "./EditToDoForm";
uuidv4();
import "../styles/components/ToDoWrapper.css"

function ToDoWrap() {
    // State to manage the list of todos
    const [todos, setTodos] = useState([]);

    // Function to add a new todo to the list
    const addToDo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
        console.log(todos);  // Log the updated todos list
    };

    // Function to toggle the completion status of a todo
    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ?
            { ...todo, completed: !todo.completed } : todo));
    };

    // Function to delete a todo from the list
    const deleteToDo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // Function to toggle the editing mode of a todo
    const editToDo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
    };

    // Function to edit the content of a todo
    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo));
    };

    return (
        <div className="ToDoWrapper">
            <h1>Let's get organized!</h1>
            <ToDoForm addToDo={addToDo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditToDoForm key={todo.id} editToDo={editTask} task={todo} />
                ) : (
                    <ToDo
                        key={index}
                        task={todo}
                        toggleComplete={toggleComplete}
                        deleteToDo={deleteToDo}
                        editToDo={editToDo}
                    />
                )
            ))}
        </div>
    );
}

export default ToDoWrap;
