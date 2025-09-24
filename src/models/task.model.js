import { randomUUID } from "crypto";

let tasks = [
    {id: randomUUID(), title : "Aprender Api Rest", completed: false},
    {id: randomUUID(), title : "Utilizar el MVC en Api Rest", completed: false},
    {id: "abc", title : "Tarea de prueba", completed: true},
];

export const findAll = () => {
    return tasks;
}

export const findTask = (id) => {
    const index = tasks.findIndex(task => task.id === id);
    
    if (index === -1) return false;
    const task = tasks[index];
    return task;
}

export const addTask = (title) => {
    const task = {
        id: randomUUID(),
        title: title,
        completed: false
    };
    tasks.push(task);
    return task;
}

export const removeTask = (id) => {
    const index = tasks.findIndex(task => task.id === id);

    if (index === -1) return false;

    tasks.splice(index, 1);

    return true;

}

export const updateTaskTitle = (id, title) => {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) return false;
    tasks[index].title = title;
    
    return tasks[index];
}

export const updateTaskCompleted = (id) => {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) return false;
    tasks[index].completed = !tasks[index].completed;
    
    return tasks[index];
}
