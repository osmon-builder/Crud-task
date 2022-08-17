const usersCtrl = {};

const User = require('../models/User');

const passport = require('passport');

const jwt = require('jsonwebtoken');

usersCtrl.renderSignup = async (req, res) => {
    res.render('user/signup');
}

usersCtrl.signup = async (req, res) => {
    const {email, password, name, confirm_password} = req.body;
    console.log(email, password, name, confirm_password);
        if(password !== confirm_password){
           return res.status(400).json({msg: 'Passwords do not match'});
        }
        if(!email || !password || !name) {
            return res.status(400).json({msg: 'Please fill all fields'});
        }
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({msg: 'User already exists'});
        }
        const newUser = new User({email, password, name});
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        const token = jwt.sign({_id: newUser._id}, process.env.TOKEN_KEY,)
        res.status(200).json({token});
   


}
usersCtrl.renderSignin = async (req, res) => {
    res.render('user/signin');
}


usersCtrl.signin = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(400).json({msg: 'User not found'});
    const isMatch = await user.matchPassword(password);
    if(!isMatch) return res.status(400).json({msg: 'Invalid Credentials'});
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_KEY,)
    res.status(200).json({token});
}

usersCtrl.logout = async (req, res) => {
    req.logout();
    res.redirect('/users/signin');
}


module.exports = usersCtrl;