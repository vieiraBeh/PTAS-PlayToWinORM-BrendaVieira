require("dotenv").config();
const conn = require("./db/conn");
const Usuario = require("./models/Usuarios");
const express = require("express");
const exphbs = require("express");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars")

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(espress.json());

app.get("/usuarios/novo", (req, res) => {
    res.render("formUsuario");
});

app.post("/usuarios/novo", (req, res) =>{
    const nickname = req.body.nickname;
    const  nome = req.body.nome;
     
    const dadosUsuario = {
        nickname,
        nome,
    };

    const usuario = Usuario.create(dadosUsuario);

    res.send("Usuário inserido sob o id "+ usuario.id);
});

app.listen(8000);

conn.
sync()
.then(()=> {
    console.log("Conectado com sucesso!");
})
.catch((err)=>{
    console.log("Ocorreu um erro: " + err)
});