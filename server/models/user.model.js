const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const shoeSchema = new mongoose.Schema({
    shoeCompany: {
        type: String,
        default: ''
    },
    shoeName: {
        type: String,
        default: ''
    },
    shoeImgLink: {
        type: String,
        default: ''
    },
    shoeSize: {
        type: String,
        default: ''
    },
    shoeType: {
        boot: {type: Boolean, default: false},
        sneaker: {type: Boolean, default: false},
        dressShoe: {type: Boolean, default: false},
        sandal: {type: Boolean, default: false}
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

// UserSchema.virtual("confirmPassword")
//     .get(()=>this._confirmPassword)
//     .set(val => (this._confirmPassword = val));

// UserSchema.pre('validate', function(next) {
//    if (this.password !== this.confirmPassword) {
//         this.invalidate('confirmPassword', 'Password must match confirm password.');
//    }
//    next();
// });

UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10).then(hash =>{
        console.log('My password is: ' + this.password);
        console.log('My hash is: ' + hash);
        this.password = hash;
        console.log('My new password is: ' + this.password);
        next();
    });
});

module.exports.User = mongoose.model('User', UserSchema);
