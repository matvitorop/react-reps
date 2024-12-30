//import ToDoList from "./forXState/components/ToDoList"
import TodoList from "./forJotai/components/TodoList.jsx";
import AddTodo from "./forJotai/components/AddTodo.jsx";
import Filter from "./forJotai/components/Filter.jsx";
import styles from './styles/App.module.css';

function App() {
    return (
        <div className={styles.appContainer}>
            <h1 className={styles.title}>To-Do List</h1>
            <Filter/>
            <div className={styles.todoList}>
                <TodoList/>
            </div>
            <div className={styles.addTodo}>
                <AddTodo/>
            </div>
        </div>
    )
}

export default App
