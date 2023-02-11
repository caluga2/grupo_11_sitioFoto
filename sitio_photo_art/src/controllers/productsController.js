const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const db = require('../database/models');

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

  // Create - Form to create
  productAdd: (req, res) => {
    res.render("productAdd", {
      user: req.session.userLogged,
    });
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
      productoID: products[products.length - 1].productoID + 1,
      ...req.body,
      image,
    };
    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
    db.productos
        .create(newProduct)
        .then((storedProduct) => {
          return res.redirect("/");
        })
        .catch((error) => console.log(error));
    //res.redirect("/");
  },

  // Update - Form to edit
  edit: (req, res) => {
    let productoID = req.params.productoID;
    let productToEdit = products.find((product) => product.productoID == productoID);
    res.render("product-edit-form", { productToEdit });
  },
  // Update - Method to update
  update: (req, res) => {
    let productoID = req.params.productoID;
    let productToEdit = products.find((product) => product.productoID == productoID);

    productToEdit = {
      productoID: productToEdit.productoID,
      ...req.body,
      image: productToEdit.image,
    };

    let newProducts = products.map((product) => {
      if (product.productoID == productToEdit.productoID) {
        return (product = { ...productToEdit });
      }
      return product;
    });

    fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, " "));
    res.redirect("/");
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    let productoID = req.params.productoID;
    let finalProducts = products.filter((product) => product.productoID != productoID);
    fs.writeFileSync(
      productsFilePath,
      JSON.stringify(finalProducts, null, " ")
    );
    res.redirect("/");
  },
};

module.exports = controller;
