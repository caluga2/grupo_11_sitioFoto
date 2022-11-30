// **** Require's ****
const express = require('express');
const router = express.Router();

// **** Controller Require ****
const mainController = require('../controllers/mainController');

//Actualizar para lo nuestro
//router.get('/', mainController.index); 
//router.get('/search', mainController.search); 
router.get("/", (req, res) => {
    res.render("home");
  });
  
router.get("/register", (req, res) => {
    res.render("register");
  });
  
router.get("/login", (req, res) => {
    res.render("login");
  });
  
router.get("/Producto", (req, res) => {
    res.render("Producto");
  });
  router.get("/CatalogoProductos1", (req, res) => {
    res.render("CatalogoProductos1");
  });
  
router.get("/Carrito", (req, res) => {
    res.render("Carrito");
  });
  
router.get("/productAdd", (req, res) => {
    res.render("productAdd");
  });

module.exports = router;