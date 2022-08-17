const { Router } = require('express');
const router = Router();

const { signup, signin,  renderSignup, logout, renderSignin } = require('../controllers/users.controller');

// router.get('/users/signup', renderSignup);
router.post('/users/signup', signup);
router.get('/users/signin', renderSignin);
router.post('/users/signin', signin);
router.get('/users/logout', logout);


module.exports = router;