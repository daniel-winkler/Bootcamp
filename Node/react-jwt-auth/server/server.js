require("./config/config");

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();

//Antes de los endpoints, usamos los middlewares.
app.use(express.json());
app.use(cors());


// const users = require("./routes/users")
// const login = require("./routes/login")

// app.use("/users", users)
// app.use("/login", login)

app.use(require("./routes/index"))


mongoose.connect("mongodb://localhost:27017/users", {
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