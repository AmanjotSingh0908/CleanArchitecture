const { validateUser } = require("../middleware/userMiddleware")
const {userRegistration, userLogin} = require("../controller/userController")

const userRouter = require("express").Router();

userRouter.post("/new", validateUser, userRegistration);
userRouter.post("/login", validateUser, userLogin);

module.exports = userRouter;