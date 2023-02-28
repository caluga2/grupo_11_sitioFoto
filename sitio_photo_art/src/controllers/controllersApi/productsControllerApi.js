const db = require("../database/models");
const Op = db.Sequelize.Op;

module.exports = {
  list: function (req, res) {
    res.render("productsList", {
      products: products,
      users: users,
      user: req.session.userLogged,
    });
  },
  detail: (req, res) => {
    db.productos.findByPk(req.params.productoID).then(function (data) {
      let productos = data.dataValues;
      res.render("productDetail", { productos, user: req.session.userLogged });
    });
  },
};
