const { json } = require("express");
const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/users.json");
const usuarios = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const controller = {
  list: function (req, res) {
    res.render("userList", { users: usuarios });
  },
};

module.exports = controller;
