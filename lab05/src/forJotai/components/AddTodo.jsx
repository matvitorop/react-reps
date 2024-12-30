import {useAtom} from "jotai";
import {toDoList} from "../atoms.jsx"
import {useState} from "react";
import styles from "../styles/AddTodo.module.css";

export default function AddTodo(){
    const [text, setText] = useState('');
    const [todoList, setTodoList] = useAtom(toDoList);

    const addTodo = () => {
        if (text.trim() === '') return;

        const lastId = todoList.length > 0 ? todoList[todoList.length - 1].id : 0;
        const newTodo = { id: lastId + 1, text, completed: false };

        setTodoList([...todoList, newTodo]);
        setText('');
    }

    return (
        <div className={styles.addTodoContainer}>
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="New task"
                className={styles.inputField}
            />
            <button onClick={addTodo} className={styles.addButton}>Додати</button>
        </div>
    )
}