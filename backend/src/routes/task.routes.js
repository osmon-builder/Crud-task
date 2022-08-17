const { Router } = require('express');
const router = Router();



const { 
    getTask, 
    addTask,  
    editTask, 
    deleteTask 
} = require('../controllers/task.controller');
const verifyToken = require('../middleware/auth');

router.get('/tasks', verifyToken, getTask);
router.post('/tasks/new-task',verifyToken, addTask);


router.put('/tasks/edit/:id',verifyToken, editTask);
router.delete('/tasks/delete/:id',verifyToken, deleteTask);



module.exports = router;