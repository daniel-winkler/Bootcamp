//importamos nuestro archivo config.js
require("./config/config");

const express = require("express");
const app = express();

//Antes de los endpoints, usamos los middlewares.
app.use(express.json());

let users = [];

app.get("/users", (req,res) => {
    const user = {name: "John", email: "john@email.com"}
    res.json({ok: true, results: users})
})

// app.get("/", (req,res) => {
//     let body = req.body;
//     if (body.username) {
//         res.status(200).json({username: body.username})
//     } else {
//         res.status(400).json({
//             ok: false,
//             message: "username missing"
//         })
//     }
// })

app.put("/users/:id", (req,res) => {
    let id = req.params.id;
    res.json({id})
})

// app.put("/user/:id", (req, res) => {
//     let id = req.params.id;
//     if (id) {
//         res.status(201).json({userId: id})
//     } else {
//         res.status(404).json({
//             ok: false,
//             message: "ID missing"
//         })
//     }
// })

app.delete("/users/:id", (req,res) => {
    let id = req.params.id;

    const removedUser = users.splice(id, 1);

    res.status(200).json({method: "DELETE", removedUser})
})


// app.delete("/user/:id", (req,res) => {
//     let id = req.params.id;
//     if (id) {
//         res.status(200).json({
//             message:`Usuario borrado con ID: ${id}`
//         })
//     } else {
//         res.status(404).json({
//             ok: false,
//             message: "ID missing"
//         })
//     }
// })

app.post("/users", (req,res) => {
    let body = req.body;
    if (body.name) {
        users.push(body)
        res.status(201).json(body)
    } else {
        res.status(400).json({
            ok: false,
            message: "name missing"
        })
    }
})

//usamos process.env.PORT ya que lo hemos importado desde config.js
app.listen(process.env.PORT, () => {
    console.log(`listening on port: ${process.env.PORT}`);
});