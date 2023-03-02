// const db = require("../../database/models");
// const Op = db.Sequelize.Op;

// module.exports = {
//   list:  (req, res) => {
//     db.productos
//     .findAll()
//     .then(productos => {
//       return res.json(productos)
//     })
//   },

//   detail: (req, res) => {
//     db.productos.findByPk(req.params.productoID)
//     .then(function (data) {
//       let producto = data.dataValues;
//       return res.json(producto)
//     });
//   },
// };
