const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/users.json");
const usuarios = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");// toThousand para separar numeros con puntos

const controller = {
  list: function (req, res) {
    res.render("userList", { users: usuarios });
  },
};

module.exports = controller;
