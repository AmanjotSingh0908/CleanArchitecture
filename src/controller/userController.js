// const { userRegistrationService } = require("../services/userServices");

// const userRegistration = async (req,res) => {
//     try {
//         const response = await userRegistrationService(req.body);
//         res.send(response);
//     } catch (error) {
//         res.status(400).send({
//             msg: "BAD REQUEST"
//         });
//     }
// };

// const userLogin = async (req, res) => {
//     res.send("OK")
// };

// module.exports = {
//     userRegistration,
//     userLogin
// }

const UserService = require("../services/userServices");

const userService = new UserService();

class UserController {
    async registration(req, res) {
        try {
            const response = await userService.registration(req.body);
            res.send(response);
        } catch (error) {
            res.status(400).send({
                msg: "BAD REQUEST"
            });
        }
    }

    async login(req,res) {
        res.send("OK");
    }
}

module.exports = UserController;