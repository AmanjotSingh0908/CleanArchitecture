// const validateUser = (req,res,next) => {
//     const { email, password } = req.body;
//     if (email && password) {
//         return next(); 
//     }

//     return res.status(401).send({
//         msg: "Invalid credentials"
//     });
// };

// module.exports = {
//     validateUser
// }

class validateUser {
    checkUser = (req,res,next) => {
    const { email, password } = req.body;
        if (email && password) {
            return next(); 
        }
        
        return res.status(401).send({
        msg: "Invalid credentials"
        });
    }
}

module.exports = validateUser
