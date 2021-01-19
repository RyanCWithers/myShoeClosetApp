const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    registerUser: (req, res) =>{
        User.create(req.body)
            .save()
            .then(user => {
                const userToken = jwt.sign({id: user._id}, process.env.SECRET_KEY);
                res
                    .cookie('usertoken', userToken, process.env.SECRET_KEY, {httpOnly: true})
                    .json(user)
            })
            .catch(err => res.json(err));
    },

    loginUser: async(req, res) =>{
        const user = await User.findOne({email: req.body.email});

        if(user === null){
            return(res.json('Invalid login attempt!'))
        }

        const correctPassword = await bcrypt.compare(req.body.password, user.password);
        
        if(!correctPassword) {
            return(res.json('Invalid login attempt!'))
        }

        const userToken = jwt.sign({id: user._id}, process.env.SECRET_KEY);

        res
            .cookie("usertoken", userToken, process.env.SECRET_KEY, {httpOnly: true})
            .json('Successful login attempt!');
    },

    logoutUser: (req, res) =>{
        res.clearCookie('usertoken');
        res.json('Succesful logout');
    }
    

}