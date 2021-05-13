require("./config/config");

const mongoose = require("mongoose");
const express = require("express");
const app = express();

//Antes de los endpoints, usamos los middlewares.
app.use(express.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


const todos = require("./routes/todos")

app.use("/todos", todos)

mongoose.connect("mongodb://localhost:27017/todos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const db = mongoose.connection;

db.on("error", err => console.log(`Connection to DB failed: ${err}`));

db.once("open", () => console.log("Connection to DB successful"));

app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`);
});