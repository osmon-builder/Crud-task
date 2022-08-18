const taskController = {};


const Task = require('../models/Task');

taskController.getTask = (req, res) => {
    Task.find({}, (err, tasks) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).send(tasks);
    })
}

taskController.getTaskById = async(req, res) => {
    const task = await Task.findById(req.params.id);
    res.status(200).send(task);
}

taskController.addTask = (req, res) => {
    const { title, description } = req.body;
    const newTask = new Task({ title, description });
    newTask.save((err, task) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).send(task);
    })
}




taskController.editTask = async(req, res) => {
    const { title, description } = req.body;
    await Task.findByIdAndUpdate(req.params.id, { title, description });
    res.status(200).send('Task updated');      

}

taskController.deleteTask = async(req, res) => {
   await Task.findByIdAndDelete(req.params.id);
    res.status(200).send('Task deleted');
}







module.exports = taskController;