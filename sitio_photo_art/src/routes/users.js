// **** Require's ****
const express = require("express");
const router = express.Router();

// **** Controller Require ****
const userController = require("../controllers/userController");

//Actualizar para lo nuestro
//router.get('/', mainController.index);
//router.get('/search', mainController.search);
router.get("/userList", userController.list);


module.exports = router;
