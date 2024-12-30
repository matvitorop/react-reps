# Lab №5: State managers

For this lab, I started searching for useful and simple managers to create a typical Todo List. Firstly, I chose **xState** for creating machine of states, but after making states with src, I encountered a fatal error. After a long depression, I chose Jotai State manager for its simple syntax and big functionality.

So, what does this project contain? It contains a failed xState a machine in the **forXState** folder and a completed program in the **forJotai** folder. There are styles and components that have been collected in App.jsx. 

In components, we have 4 files: 
- TodoItem, that contain info about every todo and give the possibility to delete them and change their status.
- TodoList, for collecting all todos in the list
- AddTodo, for adding new (only uncompleted) todos in the list
- Filter, to filter todos in list.

All these have access to global states (atoms) in the **atom.jsx** file, that have main todo objects and atoms, that use readonly access to filter elements and return them.

To conclude, state managers are great stuff for making states control easier and avoiding props drilling in the system of components.

I hope my readme was useful to understand this extremely hard project. Please, leave feedback for more information.