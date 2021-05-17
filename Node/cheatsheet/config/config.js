//Configuramos una variable de entorno para que en caso de que el puerto esté ya en uso
//utiliza el puerto 3000

// PORT
process.env.PORT = process.env.PORT || 4000;

//SEED
// require("crypto").randomBytes(64).toString("hex"); o SHA256
process.env.SEED = process.env.SEED || "d0cb5198e5e9c08a3adc21f3b638b1a7f041ccb4fd5303ae3e320a4e324e04d999257b74a134295541c761fa7938e332c2ffb9c2396b78e869af17da6d419b9a";