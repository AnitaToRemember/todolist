import { useState } from "react";
import {v4 as uuidv4 } from 'uuid';
import ToDoForm from "./toDoForm";
import ToDo from "./ToDo";
import EditToDoForm from "./EditToDoForm";
uuidv4();

function ToDoWrapper () {
    const [todos, setTodos] = useState ([]);
    const addToDo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos);
    };
    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ?
            {...todo, completed : !todo.completed} : todo))
    };
    const deleteToDo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    };
    const editToDo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    };

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing } : todo))
    }
    return(
        <div className="ToDoWrapper">
        <h1>Let's get organized!</h1>
            <ToDoForm addToDo={addToDo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditToDoForm  key={todo.id} editToDo={editTask} task={todo}/>
                ) : (
                <ToDo task={todo} key={index} toggleComplete={toggleComplete} deleteToDo={deleteToDo} editToDo={editToDo}/>
                )
            ))}
        </div>
    )
}

export default ToDoWrapper