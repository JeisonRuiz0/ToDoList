import React, { useState } from "react";
import initialData from '../Data.json'; // Asumiendo que los datos iniciales están aquí
import ToDoItem from "./ToDoItem";
import './Styles/TodoList.scss';

const ToDoList = () => {
    const [todos, setTodos] = useState(initialData); // Estado para los ToDos
    const [text, setText] = useState(''); // Estado para el texto del input

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return; // Evita agregar ToDos vacíos
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]); // Agrega el nuevo ToDo
        setText(''); // Limpia el input
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        }));
    };


    const deleteToDo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div className="TodoList-container">
           
                <form onSubmit={handleSubmit}>
                <div className="TodoList__addTodo">
                    <input
                        id="addToDo large-input"
                        type="text"
                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={text}
                        onChange={(e) => setText(e.target.value)} // Actualiza el estado del texto
                    />
                    <button type="submit" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Agregar</button>
                    </div>
                </form>
           
            <div className="TodoList__Items">
                {
                    todos.map(todo => (
                        <ToDoItem
                            key={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            toggleComplete={() => toggleComplete(todo.id)}
                            deleteToDo={() => deleteToDo(todo.id)}
                        />
                    ))
                }
            </div>



        </div>
    );
}

export default ToDoList;
