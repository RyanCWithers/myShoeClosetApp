const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const shoeSchema = new mongoose.Schema({
    shoeCompany: {
        type: String,
    },
    shoeName: {
        type: String,
    },
    shoeImgLink: {
        type: String
    },
    shoeSize: {
        type: String,
    }
});

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter your first name!']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your last name!']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email!'],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, 'Please enter a password!'],
        minlength: [7, 'The password must be 7 or more characters!']
    },
    shoes: [shoeSchema]
}, {timestamps: true});

UserSchema.virtual("confirmPassword")
    .get(()=>this._confirmPassword)
    .set(val => (this._confirmPassword = val));

UserSchema.pre('validate', function(next) {
     console.log(this.confirmPassword);
   if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password.');
   }
   next();
});

UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10).then(hash =>{
        this.password = hash;
        next();
    });
});

module.exports.User = mongoose.model('User', UserSchema);
