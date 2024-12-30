import {useAtom} from "jotai";
import {filteredData} from "../atoms.jsx"
import TodoItem from "./TodoItem.jsx";

export default function TodoList(){
    const [todos] = useAtom(filteredData)

    return (
        <div>
            {todos.map(todo => (
                <TodoItem key={todo.id} element={todo}></TodoItem>
            ))}
        </div>
    )
}
