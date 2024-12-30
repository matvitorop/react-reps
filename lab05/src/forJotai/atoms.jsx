import {atom} from "jotai";

export const toDoList = atom([
    {id: 1, text: "Make 5 react lab", completed: false},
    {id: 2, text: "Clean the room", completed: true},
    {id: 3, text: "Cook crystal meth", completed: false},
])

export const filterAtom = atom('all')

export const filteredData = atom((get)=> {
    const filter = get(filterAtom)
    const list = get(toDoList)

    if (filter === 'completed') {
        return list.filter(todo=> todo.completed)
    }
    if (filter === 'notCompleted') {
        return list.filter(todo=> !todo.completed)
    }
    return list
})