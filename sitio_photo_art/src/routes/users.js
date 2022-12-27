// **** Require's ****
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// **** Controller Require ****
const userController = require("../controllers/userController");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/images/imgU");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });


//Actualizar para lo nuestro
//router.get("/", userController.index);
//router.get('/search', mainController.search)
/* CREATE ONE USER */
router.get("/register", userController.register);

router.get("/userList", userController.list);
router.post("/", upload.single("imagen"), userController.store);

module.exports = router;
