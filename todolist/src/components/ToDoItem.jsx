import React from "react";
import './Styles/TodoItem.scss';


const ToDoItem = ({ id, text, completed, toggleComplete, deleteToDo }) => {

    const textStyle = completed ? { color: 'red' } : {};

    return (
        <div className="TodoItem-container">
            <div className="TodoItem__check">
                <p>{id}</p>
                <input id="default-checkbox" type="checkbox" checked={completed} onChange={toggleComplete}  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

            </div>
            <div className="TodoItem__text">
                <span style={textStyle}>{text}</span>
            </div>
            <div className="TodoItem__button">
                <button type="button" onClick={deleteToDo} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Eliminar</button>
            </div>

        </div>
    )
}


export default ToDoItem;