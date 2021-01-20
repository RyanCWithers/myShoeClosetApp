const {User} = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    registerUser: async(req, res) =>{
        const {firstName, lastName, email, password, shoes} = req.body;
        
        const userExists = await User.findOne({email: req.body.email});

        if (userExists){
            return(res.json({msg: "Sorry. There is already a user that exists with that email!"}));
        }
        User.create(req.body)
            .then(user => {
                user.save();
                const userToken = jwt.sign({id: user._id}, process.env.SECRET_KEY);
                res
                    .cookie('usertoken', userToken, process.env.SECRET_KEY, {httpOnly: true})
                    .json(user);
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
    },
    
    getLoggedInUser: (req, res) =>{
        if(!req.cookies.usertoken){
            return(res.json({msg: "You need to log in first!"}));
        }
        const decodedJWT = jwt.decode(req.cookies.usertoken, {complete: true});
        User.findOne(decodedJWT.payload._id)
            .then(user => res.json(user))
            .catch(err => res.json(err));
    },

    createShoe: (req, res) =>{
        if(!req.cookies.usertoken){
            return(res.json({msg: "You need to log in first!"}));
        }

        const decodedJWT = jwt.decode(req.cookies.usertoken, {complete: true});
        User.findOneAndUpdate(
            decodedJWT.payload._id,
            {$push:{shoes: req.body}},
            {new: true})

            .then(user=> res.json(user))
            .catch(err => res.json(err));

    },

    deleteShoe: (req, res) =>{
        // if(!req.cookies.usertoken){
        //     return(res.json({msg: "You need to log in first!"}));
        // }

        // const decodedJWT = jwt.decode(req.cookies.usertoken, {complete: true});
        // User.findOneAndUpdate(
        //     decodedJWT.payload._id,
        //     {$pull:{shoes:{_id: req.params.shoeId}}},
        //     {new: true}
        // )
        //     .then(user => res.json(user))
        //     .catch(err => res.json(err));
    }


}