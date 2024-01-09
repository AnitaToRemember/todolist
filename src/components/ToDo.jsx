import { faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../styles/components/ToDo.css"

function ToDo({ task, toggleComplete, deleteToDo, editToDo }) {
    return (
        <section className="Todo">
            {/* Paragraph for displaying the task, with a conditional "completed" class */}
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? "completed" : ""}`}>
                {task.task}
            </p>
            <span>
                <FontAwesomeIcon icon={faPenSquare} onClick={() => editToDo(task.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteToDo(task.id)} />
            </span>
        </section>
    );
}

export default ToDo;
