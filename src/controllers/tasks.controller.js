import * as model from "../models/task.model.js";

export const getAllTasks = (req, res) => {
    const data = model.findAll();
    res.status(200).json(data);
};

export const getTask = (req, res) => {
    const { id } = req.params;
    const data = model.findTask(id);
    if (!data) return res.status(404).json({ message: "Tarea no encontrada." });
    res.status(200).json(data)
}

export const createTask = (req, res) => {
    const { title } = req.body;
    const createdTask = model.addTask(title);
    res.status(201).json(createdTask);
};

export const removeTask = (req, res) => {
    const id = req.params.id;
    const ok = model.removeTask(id);
    if (!ok) {
        return res.status(404).json({message: "Tarea no encontrada."});
    }
    res.status(204).json({message: "Tarea eliminada."})
}

export const updateTaskTitle = (req, res) => {
    const {id} = req.params;
    const {title} = req.body;
    const updated = model.updateTaskTitle(id, title);
    if (!updated) return  res.status(404).json({message: "Tarea no encontrada"});
    return res.status(201).json(updated);
}

export const updateTaskCompleted = (req, res) => {
    const {id} = req.params;
    const updated = model.updateTaskCompleted(id);
    if (!updated) return  res.status(404).json({message: "Tarea no encontrada"});
    return res.status(201).json(updated);
}