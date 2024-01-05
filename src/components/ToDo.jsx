import { faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ToDo ({task, toggleComplete, deleteToDo, editToDo}) {
    return(
        <div className="Todo">
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : "" }`}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenSquare} onClick={ () => editToDo(task.id)}/>
                <FontAwesomeIcon icon={faTrash} onClick={ () => deleteToDo(task.id)}/>
            </div>
        </div>
    )
}

export default ToDo