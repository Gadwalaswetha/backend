const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

exports.addTask = async (req, res) => {
    try {
        const { description } = req.body;
        const newTask = await Task.create({ description });
        res.json(newTask);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await Task.destroy({ where: { id } });
        res.send('Task deleted');
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { completed } = req.body;
        const task = await Task.findByPk(id);
        task.completed = completed;
        await task.save();
        res.json(task);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
