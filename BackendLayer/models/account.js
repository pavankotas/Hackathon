const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for customer
let accountSchema = new Schema({
    account_id: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    userName: {
        type: String
    },
    password: {
        type: String
    },
    organizationName: {
        type: String
    },
    address_line1:{
        type: String
    },
    address_line2:{
        type: String
    },
    city:{
        type: String
    },
    state:{
        type: String
    },
    zip:{
        type: String
    }
},{
    collection: 'Account'
});

const Account = mongoose.model('account', accountSchema );

module.exports = Account;
