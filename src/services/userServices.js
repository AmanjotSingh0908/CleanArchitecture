const userRepository = require("../repository/userRepository");

const userRegistrationService = async (user) => {
    const checkExistUser = await userRepository.findOneUserByEmail(user.email);

    if(checkExistUser) {
        return {
            msg: "User already exists"
        };
    }

    const saveUser = await userRepository.addUser(user);
    return saveUser;
}

module.exports = {
    userRegistrationService
};