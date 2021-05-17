const express = require("express");
const ramda = require("ramda")
const bcrypt = require("bcrypt")
const router = express.Router();

const User = require("../models/user");

router.get("/", async (req,res) => {

    const PAGE_SIZE = 2;
    const page = req.query.page || 1;

    const count = await User.count({})
    // console.log(count);

    //similar al find de Mongo, si el filtro está vacio devolvera
    //todos los documentos de la coleccion.
    User.find({ active: true })
    .skip( ( page - 1 ) * PAGE_SIZE ) //numero de docuemntos que saltara
    .limit(PAGE_SIZE) //numero de documentos que devolvera
    .exec((err, users) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            })
        } else {
            res.status(201).json({
                ok: true,
                page: page,
                count,
                total_pages: count / PAGE_SIZE,
                results: users
            })
        }
    })
});

router.post("/", (req,res) => {
    
    let body = req.body;

    const user = new User({
        username: body.username,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10)
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