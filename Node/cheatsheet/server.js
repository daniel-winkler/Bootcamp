const express = require("express");
const app = express();

//Antes de los endpoints, usamos los middlewares.
app.use(express.json());


// app.get("/", (req,res) => res.send("Hola Mundo"));

app.get("/", (req,res) => {
    res.json({message: "Peticion GET recibida correctamente"});
});

app.get("/:id", (req,res) => {
    let id = req.params.id;
    res.json({message: `Peticion GET recibida con parámetro: ${id}`});
});

app.post("/", (req,res) => {
    console.log(req.body);

    let body = req.body;

    if (body.username) {
        res.status(200).json({
            message: `Recibido username: ${body.username}`,
        });
    } else {
        res.status(400).json({
            ok: false,
            message: "Username No recibido",
        });
    }

    // res.json({
    //     message: "Peticion POST recibida correctamente",
    //     username: body.username
    // });
});
 


app.listen(3050);