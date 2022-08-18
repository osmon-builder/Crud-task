const { Router } = require('express');
const router = Router();



const { 
    getTask, 
    addTask,  
    editTask, 
    deleteTask,
    getTaskById
} = require('../controllers/task.controller');
const verifyToken = require('../middleware/auth');

router.get('/tasks', verifyToken, getTask);
router.get('/tasks/:id', verifyToken, getTaskById);
router.post('/tasks/new-task',verifyToken, addTask);


router.put('/tasks/edit/:id', editTask);
router.delete('/tasks/delete/:id',verifyToken, deleteTask);



module.exports = router;