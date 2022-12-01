// **** Require's ****
const express = require('express');
const router = express.Router();

// **** Controller Require ****
const mainController = require('../controllers/mainController');

 
router.get("/", (req, res) => {
    res.render("home");
  });
  
router.get("/register", (req, res) => {
    res.render("register");
  });
  
  router.get("/Carrito", (req, res) => {
      res.render("Carrito");
    });
    /*pasar a producto*/ 
    router.get("/producto", (req, res) => {
      res.render("producto");
    });
  
router.get("/login", (req, res) => {
    res.render("login");
  });
  


module.exports = router;