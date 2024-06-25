// const { validateUser } = require("../middleware/userMiddleware")
// const {userRegistration, userLogin} = require("../controller/userController")

// const userRouter = require("express").Router();

// userRouter.post("/new", validateUser, userRegistration);
// userRouter.post("/login", validateUser, userLogin);

// module.exports = userRouter;

const validateUser = require("../middleware/userMiddleware");
const UserController = require("../controller/userController");

const controller = new UserController();
const validate = new validateUser();

const userRouter = require("express").Router();

userRouter.post("/new", validate.checkUser, controller.registration);
// userRouter.post("/login", validateUser, controller.login);

module.exports = userRouter;