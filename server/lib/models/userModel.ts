import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    }, 
    email: {
        type: String,
        required: 'Enter a user name'
    },
     password: {
        type: String,
        required: 'Enter password'
    },
});