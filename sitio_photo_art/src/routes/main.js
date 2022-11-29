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
  
router.get("/Carrito", (req, res) => {
    res.render("Carrito");
  });
  
router.get("/productAdd", (req, res) => {
    res.render("productAdd");
  });

 router.get("/productDetail", (req, res) => {
    res.render("productDetail");
  });

module.exports = router;