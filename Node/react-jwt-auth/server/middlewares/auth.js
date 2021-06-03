const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    let token = req.get("authorization"); // req.headers?.authorization
    token = token && token.split(" ")[1] //&& para evitar que haga split a un undefined (en el caso de que authorization no exista)
    
    jwt.verify(token, process.env.SEED, (error, payload) => {
        if (error) {
            res.status(401).json({
                ok: false,
                error
            })
        } else {
            next()
        }
    })
};

module.exports = verifyToken;