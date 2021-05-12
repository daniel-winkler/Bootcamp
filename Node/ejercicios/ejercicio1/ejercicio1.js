const express = require("express");
const app = express();

//Antes de los endpoints, usamos los middlewares.
app.use(express.json());

app.get("/", (req,res) => {
    let body = req.body;
    if (body.username) {
        res.status(200).json({username: body.username})
    } else {
        res.status(400).json({
            ok: false,
            message: "username missing"
        })
    }
})

app.put("/user/:id", (req, res) => {
    let id = req.params.id;
    if (id) {
        res.status(201).json({userId: id})
    } else {
        res.status(404).json({
            ok: false,
            message: "ID missing"
        })
    }
})

app.delete("/user/:id", (req,res) => {
    let id = req.params.id;
    if (id) {
        res.status(200).json({
            message:`Usuario borrado con ID: ${id}`
        })
    } else {
        res.status(404).json({
            ok: false,
            message: "ID missing"
        })
    }
})

app.post("/user", (req,res) => {
    let user = req.body;
    if (user.name) {
        res.status(201).json(user)
    } else {
        res.status(400).json({
            ok: false,
            message: "name missing"
        })
    }
})

app.listen(3000);