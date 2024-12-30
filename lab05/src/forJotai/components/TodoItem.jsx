import {useAtom} from "jotai";
import {toDoList} from "../atoms.jsx"
import styles from '../styles/ToDoItem.module.css';

// eslint-disable-next-line react/prop-types
export default function TodoItem({element}) {
    const [todoList, setTodoList] = useAtom(toDoList)

    const changeTaskState = () => {
        const newTodoList = todoList.map(todo =>
            // eslint-disable-next-line react/prop-types
            todo.id === element.id ? {...todo, completed: !todo.completed} : todo
        )
        setTodoList(newTodoList)
    }

    const deleteTodo = () => {
        // eslint-disable-next-line react/prop-types
        const newTodoList = todoList.filter(todo => todo.id !== element.id)
        setTodoList(newTodoList)
    }

    return (
        <li className={styles.todoItem}>
            <span
                className={styles.todoText}
                style={{textDecoration: element.completed ? 'line-through' : 'none'}}
                onClick={changeTaskState}
            >
            {element.text}
            </span>
            <button className={styles.deleteButton} onClick={deleteTodo}>Видалити</button>
        </li>
    );


}