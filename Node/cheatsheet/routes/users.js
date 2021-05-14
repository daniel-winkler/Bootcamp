const express = require("express");
const ramda = require("ramda")
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
                results: users
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

router.put("/:id", (req,res) => {

    const id = req.params.id;
    const body = ramda.pick(["username", "email"], req.body); //pilla los parametros que el cliente puede actualizar, lo demás lo obvia, no tira a error.

    User.findByIdAndUpdate(
        id,
        body,
        { new: true, runValidators: true, context: "query" }, //options
        (error, updatedUser) => {
            if (error) {
                res.status(400).json({
                    ok: false,
                    error
                })
            } else {
                res.status(200).json({
                    ok: true,
                    updatedUser
                })
            }
        }
    );
 
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;

    // User.findByIdAndRemove(id , (error, removedUser) => {
    //     if (error) {
    //         res.status(400).json({
    //             ok: false,
    //             error
    //         })
    //     } else {
    //         res.status(200).json({
    //             ok: true,
    //             removedUser
    //         })
    //     }
    // });

    User.findByIdAndUpdate(
        id,
        { active: false }, //body
        { new: true, runValidators: true, context: "query" }, //options
        (error, updatedUser) => {
            if (error) {
                res.status(400).json({
                    ok: false,
                    error
                })
            } else if (!updatedUser){
                res.status(400).json({
                    ok: false,
                    error: "User not found"
                })
            } else {
                res.status(200).json({
                    ok: true,
                    updatedUser
                })
            }
        }
    );
})

module.exports = router;