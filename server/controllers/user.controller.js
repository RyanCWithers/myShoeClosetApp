const User = require('../models/user.model');
const bcrypt = require('bcrypt');

module.exports = {
    registerUser: (req, res) =>{
        User.create(req.body)
            .save()
            .then(user => res.json(user))
            .catch(error => res.json(error));
    },

    login: async(req, res) =>{
        const user = await User.findOne({email: req.body.email});

        if(user === null){
            return(res.json('Invalid login attempt!'))
        }

        const correctPassword = await bcrypt.compare(req.body.password, user.password);
    }
}