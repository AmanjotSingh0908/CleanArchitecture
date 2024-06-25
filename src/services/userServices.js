const userRepository = require("../repository/userRepository");

// const userRegistrationService = async (user) => {
//     const checkExistUser = await userRepository.findOneUserByEmail(user.email);

//     if(checkExistUser) {
//         return {
//             msg: "User already exists"
//         };
//     }

//     const saveUser = await userRepository.addUser(user);
//     return saveUser;
// }

// module.exports = {
//     userRegistrationService
// };

const repository = new userRepository();

class UserService {
    async registration(user) {
        try {
            const checkExistUser = await repository.findOneUserByEmail(user.email);

            if(checkExistUser) {
                return {
                    msg: "User already exist"
                };
            }
            const saveUser = await repository.addUser(user);

            return saveUser;
        } catch (error) {
            return error;
        }
    }
}

module.exports = UserService;