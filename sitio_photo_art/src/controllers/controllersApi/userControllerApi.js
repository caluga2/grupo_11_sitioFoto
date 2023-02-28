const db = require("../database/models");
const Op = db.Sequelize.Op;

module.exports = {
  list: function (req, res) {
    res.render("userList", { users: users, user: req.session.userLogged });
  },
};
