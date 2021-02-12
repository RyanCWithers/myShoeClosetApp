const {User} = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    registerUser: async(req, res) =>{
                
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
        
    }, //registerUser

    updateUser: async(req, res) =>{
        const emailExists = await User.findOne({email: req.body.email});

        if(emailExists){
            return(res.json({msg: 'This email already in use. Please choose another one.'}))
        }
        
        User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then(updatedUser => res.json(updatedUser))
            .catch(err => res.json(err));
    }, //updateUser

    deleteUser: (req, res) =>{
        User.deleteOne({_id: req.params.id})
            .then(() => res.json({msg: 'Your profiled was deleted successfully!'}))
            .catch(err => res.json(err))
    }, //deleteUser

    loginUser: async(req, res) =>{
        const user = await User.findOne({email: req.body.email});
        
        if(user === null){
            return(res.json('Invalid login attempt!'));
        }

        const correctPassword = await bcrypt.compare(req.body.password, user.password);
        
        if(!correctPassword) {
            return(res.json('Invalid login attempt!'));
        }

        const userToken = jwt.sign({_id: user._id}, process.env.SECRET_KEY);

        res
            .cookie("usertoken", userToken, process.env.SECRET_KEY, {httpOnly: true})
            .json(user);
    }, //loginUser

    logoutUser: (req, res) =>{
        res.clearCookie('usertoken');
        res.json('Succesful logout');
    }, //logoutUser
    
    getLoggedInUser: (req, res) =>{
        if(!req.cookies.usertoken){
            return(res.json({msg: "You need to log in first!"}));
        }
        const decodedJWT = jwt.decode(req.cookies.usertoken, {complete: true});

        User.findOne({_id: decodedJWT.payload._id})
            .then(user => res.json(user))
            .catch(err => res.json(err)); 
    }, //getLoggedInUser

    createShoe: (req, res) =>{
        if(!req.cookies.usertoken){
            return(res.json({msg: "You need to log in first!"}));
        }

        const decodedJWT = jwt.decode(req.cookies.usertoken, {complete: true});
        User.findOneAndUpdate(
            {_id: decodedJWT.payload._id},
            {$push:{shoes: req.body}},
            {new: true})

            .then(user=> res.json(user))
            .catch(err => res.json(err));

    }, //createShoe

    deleteShoe: (req, res) =>{
        if(!req.cookies.usertoken){
           return(res.json({msg: "You need to log in first!"}));
        }

        const decodedJWT = jwt.decode(req.cookies.usertoken, {complete: true});
        User.findOneAndUpdate(
            {_id: decodedJWT.payload._id},
            {$pull:{shoes: {_id: req.params.shoeId}}},
            {new: true})

            .then(user => res.json(user))
            .catch(err => res.json(err));
    }, //deleteShoe

    getShoe: (req, res) =>{
        if(!req.cookies.usertoken){
            return(res.json({msg: "You need to log in first!"}));
         }
 
        const decodedJWT = jwt.decode(req.cookies.usertoken, {complete: true});
        User.findOne({_id: decodedJWT.payload._id})
            .then(user => {
                const shoe = user.shoes.id(req.params.shoeId);
                res.json(shoe);
            })
            .catch(err => res.json(err));
    }, //getShoe

    updateShoe: (req, res) =>{
        if(!req.cookies.usertoken){
            return(res.json({msg: "You need to log in first!"}));
         }
 
        const decodedJWT = jwt.decode(req.cookies.usertoken, {complete: true});

        User.findOneAndUpdate({_id: decodedJWT.payload._id , "shoes._id" : req.params.shoeId} ,
            {$set: {
                "shoes.$.shoeName" : req.body.shoeName,
                "shoes.$.shoeCompany" : req.body.shoeCompany,
                "shoes.$.shoeSize" : req.body.shoeSize,
                "shoes.$.shoeImgLink" : req.body.shoeImgLink,
                "shoes.$.shoeType" : req.body.shoeType
            }},
            {new: true}
        )
            .then(user => res.json(user))
            .catch(err => res.json(err));
    } //updateShoe
};