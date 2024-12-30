import {createMachine, assign} from "xstate";

export const ToDoListMachine =
    createMachine({
        context:{
            todos: []
        },
        id: "Todo machine",
        initial: "Initializing TodoList",

        states:{
            "Initializing TodoList":{
                invoke: {
                    src: "load Todos",
                    onDone: [
                        {
                            actions: "assignTodosContext",
                            guard: "isTodosAvailable",
                            target: "TodosLoadedGuide",
                        },
                        {
                            target: "CreateTodos"
                        }
                    ],
                    onError: [
                        {
                            target: "Error was occurred"
                        }
                    ]
                }
            },
            "Error was occurred":{},

            "TodosLoadedGuide":{
                on: {
                    "Add todo":{
                        target: "CreateTodos"
                    },
                    "Delete todo": {
                        target: "DeleteTodos"
                    }
                }
            },
            "CreateTodos":{

            },

            "DeleteTodos":{

            }




        },
        guards:{
            isTodosAvailable: ((context, event)=>{
                return event.data.length > 0;
            })
        },

        actions:{
            assignTodosContext: assign((context, event)=>{
                return {todos: event.data};
            })
        }
        // ,
        // services:{
        //     "load Todos": async () => {
        //         return ['asdasdas', 'asdasdadqwweqwqw'];
        //     }
        // }
    })

