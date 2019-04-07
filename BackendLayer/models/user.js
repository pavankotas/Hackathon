const mongoose =require('mongoose');
const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        trim: true
    },
    lastName:{
        type: String,
        trim: true
    },
    emailID: {
        type: String,
        unique:true,
        required:  [true, 'Email address cannot be left blank'],
        trim:true
    },
    userName: {
        type: String,
        unique:true,
        required:  [false, 'User Name cannot be left blank'],
        trim:true
    },
    password:{
        type: String,
        required: [true, 'Password cannot be left blank'],
    },
    userType:{
        type: String
    },
    organizationName:{
        type: String
    },
    startDate:{
        type: String
    },
    endDate:{
        type: String
    },
    address:{
        type: String
    }

});

/*Register UserSchema object inside the mongoose*/
const User =mongoose.model('users', UserSchema);
module.exports = User;
