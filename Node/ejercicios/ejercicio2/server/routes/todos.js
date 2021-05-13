const express = require("express");
const router = express.Router();

const Todo = require("../models/todo");

router.get("/", (req,res) => {
    //similar al find de Mongo, si el filtro está vacio devolvera
    //todos los documentos de la coleccion.
    Todo.find({}).exec((err, todos) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            })
        } else {
            res.status(200).json({
                ok: true,
                todos
            })
        }
    })
});

router.post("/", (req,res) => {
    
    let body = req.body;

    const todo = new Todo({
        title: body.title
    });

    todo.save((err, savedTodo) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            })
        } else {
            res.status(201).json({
                ok: true,
                todo: savedTodo
            })
        }
    })
});

module.exports = router;