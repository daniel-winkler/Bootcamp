const express = require("express");
const app = express();

//Antes de los endpoints, usamos los middlewares.
app.use(express.json());

app.listen(3000);