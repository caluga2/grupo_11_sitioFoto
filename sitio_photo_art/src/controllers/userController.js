const { json } = require("express");
const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/users.json");
const usuarios = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  /*index: (req, res) => {
    res.render("Producto", {
      products,
      toThousand,
    });
  },*/

  list: function (req, res) {
    res.render("userList", { users: usuarios });
  },

  register: (req, res) => {
    res.render("register");
  },
  // Create -  Method to store

  store: (req, res) => {
    let image;
    if (req.file != undefined) {
      image = req.file.filename;
    } else {
      image = "default-image.png";
    }
    let newProduct = {
      id: products[products.length - 1].id + 1,
      ...req.body,
      image,
    };
    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
    res.redirect("/");
  },
};

module.exports = controller;
