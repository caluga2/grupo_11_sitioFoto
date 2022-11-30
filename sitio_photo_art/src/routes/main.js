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
  
  router.get("/Carrito", (req, res) => {
      res.render("Carrito");
    });
    router.get("/producto", (req, res) => {
      res.render("producto");
    });
  
router.get("/login", (req, res) => {
    res.render("login");
  });
  


module.exports = router;