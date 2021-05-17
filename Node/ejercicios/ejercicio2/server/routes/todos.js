const express = require("express");
const router = express.Router();
// const ramda = require("ramda");

const Todo = require("../models/todo");

router.get("/", (req,res) => {
    //similar al find de Mongo, si el filtro está vacio devolvera
    //todos los documentos de la coleccion.
    Todo.find({ active: true }).exec((error, todos) => {
        if (error) {
            res.status(400).json({
                ok: false,
                error
            })
        } else {
            res.status(200).json({
                ok: true,
                results: todos
            })
        }
    })
});

router.post("/", (req,res) => {
    
    let body = req.body;

    const todo = new Todo({
        title: body.title
    });

    todo.save((error, savedTodo) => {
        if (error) {
            res.status(400).json({
                ok: false,
                error
            })
        } else {
            res.status(201).json({
                ok: true,
                results: savedTodo
            })
        }
    })
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    // const completed = ramda.pick(["completed"], req.body);
  
    Todo.findByIdAndUpdate(
        id,
        { completed: true }, //body
        { new: true, runValidators: true, context: "query" }, //options
        (error, updatedTodo) => {
            if (error) {
                res.status(400).json({
                    ok: false,
                    error
                })
            } else {
                res.status(200).json({
                    ok: true,
                    updatedTodo
                })
            }
        }
    );
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;

    Todo.findByIdAndUpdate(
        id,
        { active: false }, //body
        { new: true, runValidators: true, context: "query" }, //options
        (error, deletedTodo) => {
            if (error) {
                res.status(400).json({
                    ok: false,
                    error
                })
            } else if (!deletedTodo){
                res.status(400).json({
                    ok: false,
                    error: "User not found"
                })
            } else {
                res.status(200).json({
                    ok: true,
                    deletedTodo
                })
            }
        }
    );
});

module.exports = router;