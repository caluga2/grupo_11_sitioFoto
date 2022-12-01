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
  
router.get("/login", (req, res) => {
    res.render("login");
  });
  
router.get("/Carrito", (req, res) => {
    res.render("Carrito");
  });  
  
 
module.exports = router;