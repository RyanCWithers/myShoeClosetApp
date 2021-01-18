const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt');

const shoeSchema = new Schema({
    shoeCompany: {
        type: String,
        required: [true, 'Please enter the shoe company!'],
    },
    shoeName: {
        type: String,
        required: [true, 'Please enter the shoe company!'],
    },
    shoeImgLink: {
        type: String
    },
    shoeSize: {
        type: Number,
        required: [true, 'Please enter the shoe size!']
    }
});

const UserSchema = new Schema({
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
    shoes: shoeSchema
}, {timestamps: true});

UserSchema.virtual("confirmPassword")
    .get(()=>this._confirmPassword)
    .set(val => (this._confirmPassword = val));
UserSchema.pre('validate', function(next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate('confirmPassword', 'Password must match confirm password');
  }
  next();
});
UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10).then(hash =>{
        this.password = hash;
        next();
    });
});

const User = mongoose.model('User', UserSchema);
module.exports = User;