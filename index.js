require("dotenv").config();
const conn = require("./db/conn");

const Usuario = require("./models/Usuarios")

conn.
sync()
.then(()=> {
    console.log("Conectado com sucesso!");
})
.catch((err)=>{
    console.log("Ocorreu um erro: " + err)
});