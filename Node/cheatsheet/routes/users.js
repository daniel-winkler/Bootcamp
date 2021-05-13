const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.get("/", (req,res) => {
    //similar al find de Mongo, si el filtro está vacio devolvera
    //todos los documentos de la coleccion.
    User.find({}).exec((err, users) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            })
        } else {
            res.status(201).json({
                ok: true,
                users
            })
        }
    })
});

router.get("/:id", (req,res) => {
    let id = req.params.id;
    res.json({message: `Peticion GET recibida con parámetro: ${id}`});
});

router.post("/", (req,res) => {
    
    let body = req.body;

    const user = new User({
        username: body.username,
        email: body.email,
        password: body.password
    });

    user.save((err, savedUser) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            })
        } else {
            res.status(201).json({
                ok: true,
                savedUser
            })
        }
    })

    
});

module.exports = router;