require("../config/config")

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");


router.post("/", (req,res) => {
    const body = req.body;

    User.findOne({ email: body.email }, (error, userDB) => {
        if (error) {
            res.status(500).json({ ok: false, error });
        } else if (!userDB) { //significa que no ha encontrado el email en la base de datos
            res.status(400).json({ ok: false, error: "Email not found" });
        } else if (!bcrypt.compareSync(body.password, userDB.password)) {
            res.status(400).json({ ok: false, error: "Invalid password" });
        } else {
            const token = jwt.sign(
                { user: userDB }, //payload
                process.env.SEED,
                { expiresIn: 20 } // segundos
            );
            res.status(200).json({ ok: true, token, user: userDB });
        }
    })
});

module.exports = router;