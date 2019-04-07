const mongoose =require('mongoose');
const PermitSchema = new mongoose.Schema({
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
        // unique:true,
        // required:  [true, 'Email address cannot be left blank'],
        trim:true
    },
    viNumber: {
        type:Number,
        unique:true,
      //  required:  [true, 'Email address cannot be left blank'],
        trim:true
    },

    lipNumber:{
        type: String
    },
    region:{
        type: String
    },
    parkingLotName:{
        type: String
    },
    cost:{
        type: String
    },
    validFrom:{
        type: String
    },
    validTill:{
        type: String
    },
});

/*Register UserSchema object inside the mongoose*/
const Permit =mongoose.model('permit', PermitSchema);
module.exports = Permit;
