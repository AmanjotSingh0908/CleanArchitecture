const { userRegistrationService } = require("../services/userServices");

const userRegistration = async (req,res) => {
    try {
        const response = await userRegistrationService(req.body);
        res.send(response);
    } catch (error) {
        res.status(400).send({
            msg: "BAD REQUEST"
        });
    }
};

const userLogin = async (req, res) => {
    res.send("OK")
};

module.exports = {
    userRegistration,
    userLogin
}