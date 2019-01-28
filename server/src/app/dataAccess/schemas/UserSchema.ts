import DataAccess = require('../DataAccess');
import IUserModel = require('../../model/interfaces/UserModel');
import Mongoose = require('mongoose');


class UserSchema {

    static get schema() {
        return Mongoose.Schema({
            id: {
                type: String,
                required: false
            },
            firstName: {
                type: String,
                required: true,
                trim:true
            },
            lastName: {
                type: String,
                required: true,
                trim:true
            },
            email: {
                type: String,
                required: true,
                unique : true,
                trim:true
            },
            password: {
                type: String,
                required: true,
                trim:true
            },
            token:{
                type:String,
            },
            salt:{
                type:String
            }
        })
    }
}

var schema = DataAccess.mongooseConnection.model<IUserModel>("Users", UserSchema.schema);
export = schema;