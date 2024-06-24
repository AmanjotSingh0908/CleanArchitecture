/**
 * USER REALTED ALL DATABASE OPERATIONS
 * 
 */

const userSchema = require("../Models/userSchemas/userSchema");

const addUser = async (user) => {
    const response = await userSchema.create(user);
    return response;
};

const findOneUserByEmail = async (email) => {
    const response = await userSchema.findOne({email});
    return response;
};

module.exports = {
    addUser,
    findOneUserByEmail
};