import {useMachine} from "@xstate/react";
import {ToDoListMachine} from "../machines/ToDoListMachine.jsx";

const todos = ['asdasdased', 'adssad'];

export default function ToDoList() {
    const [state, send] = useMachine(ToDoListMachine, {
        services: {
            "load Todos": async () => {
                return Array.from(todos);
            },

        },
    });

    return (
        <div>
            <pre>{JSON.stringify(state.value)}</pre>
            <pre>{JSON.stringify(state.context)}</pre>
        </div>
    )
}