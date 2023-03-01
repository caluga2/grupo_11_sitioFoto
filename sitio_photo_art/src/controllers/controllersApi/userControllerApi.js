const db = require("../../database/models");
const Op = db.Sequelize.Op;

module.exports = {
  list:  (req, res) => {
    db.usuarios
    .findAll()
    .then(usuarios => {
      return res.json(usuarios)
    })
  },

  detail: (req, res) => {
    db.usuarios.findByPk(req.params.usuarioID)
    .then(function (data) {
      let usuario = data.dataValues;
      return res.json(usuario)
    });
  },
};