const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const db = require("../database/models");

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  // Root - Show all products
  index: (req, res) => {
    res.render("Producto", {
      products,
      user: req.session.userLogged,

      toThousand,
    });
  },

  // Detail - Detail from one product
  detail: (req, res) => {
    let productoID = req.params.productoID;
    let product = products.find((product) => product.productoID == productoID);
    res.render("detail", {
      product,
      user: req.session.userLogged,

      toThousand,
    });
  },
  list: function (req, res) {
    res.render("productsList", {
      products: products,
      users: users,
      user: req.session.userLogged,
    });
  },

  // Create - Form to create
  productAdd: (req, res) => {
    res.render("productAdd", {
      user: req.session.userLogged,
    });
  },

  // Create -  Method to store

  store: (req, res) => {
    let fotoProducto;
    if (req.file != undefined) {
      fotoProducto = req.file.filename;
    } else {
      fotoProducto = "default-image.png";
    }
    let newProduct = {
      productoID: products[products.length - 1].productoID + 1,
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      tipoDeProductoID: req.body.tipoDeProducto,
      tamanoDeProductoID: req.body.tamanoDeProducto,
      precio: req.body.precio,
      fotoProducto,
    };
    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
    db.productos
      .create(newProduct)
      .then((storedProduct) => {
        return res.redirect("/");
      })
      .catch((error) => console.log(error));
  },

  // Update - Form to edit
  edit: (req, res) => {
    db.productos.findByPk(req.params.productoID).then(function (productos) {
      res.render("product-edit-form"), { productos: productos };
    });
  },

  // Update - Method to update
  update: (req, res) => {
    db.productos.update(
      {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        tipoDeProductoID: req.body.tipoDeProducto,
        tamanoDeProductoID: req.body.tamanoDeProducto,
        precio: req.body.precio,
        fotoProducto,
      },
      {
        where: { productoID: req.params.productoID },
      }
    );
    res.redirect("../views/product-edit-form.ejs" + req.params.productoID);
  },

  // Delete - Delete one product from DB
  delete: (req, res) => {
    db.productos.destroy({
      where: { productoID: req.params.productoID },
    });

    let productoID = req.params.productoID;
    let finalProducts = products.filter(
      (product) => product.productoID != productoID
    );
    fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, 2));
    res.redirect("../");
  },
};

module.exports = controller;
