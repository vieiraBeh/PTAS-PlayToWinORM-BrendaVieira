const db = require("../db/conn");
const { DataTypes } = require("sequelize");
const Jogo = require("../models/Jogo");

const Conquista = db.define(
  "Conquista",
  {
    titulo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
);

Conquista.belongsTo(Jogo);
Jogo.hasMany(Conquista);

module.exports = Jogo;