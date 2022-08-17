const {Router} = require('express');
const router = Router();
// const bcrypt = require('bcryptjs');


const { renderIndex } = require('../controllers/index.controller');

// const User = require('../models/User');

// const jwt = require('jsonwebtoken');

router.get('/', renderIndex);

// router.post('/signup', async (req, res) => {
        
//     const {email, password, name} = req.body;
//     const newUser = new User({email, password, name});
//     await newUser.save();
//     const token = jwt.sign({_id: newUser._id}, 'secretkey',)
//     res.status(200).json({token});
//     console.log(newUser);
// })


// router.post('/signin', async (req, res) => {

//     const {email, password} = req.body;
//     const user = await User.findOne({email})
//     if(!user) return res.status(400).json({msg: 'User not found'});
//     const isMatch = await user.matchPassword(password);
//     if(!isMatch) return res.status(400).json({msg: 'Invalid Credentials'});
    


//     const token = jwt.sign({_id: user._id}, 'secretkey',)
//     res.status(200).json({token});
// })



module.exports = router;