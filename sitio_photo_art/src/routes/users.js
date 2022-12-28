// **** Require's ****
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");
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
const validaciones = [
  body("nombre").notEmpty().withMessage("Debe introducir su nombre"),
  body("email")
    .isEmail()
    .withMessage("Debe introducir un mail válido (xxx@xx.com)"),
  body("contrasena")
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("Debe introducir una contraseña más larga"),
  body("contrasena1").custom((value, { req }) => {
    if (value !== req.body.contrasena) {
      throw new Error("Las contraseñas no coinciden");
    }
    return true;
  }),
];
const upload = multer({ storage: storage });

//Actualizar para lo nuestro
router.get("/", userController.index);
//router.get('/search', mainController.search)
/* CREATE ONE USER */
router.get("/register", userController.register);

router.get("/userList", userController.list);
router.post("/", upload.single("imagen"), validaciones, userController.store);

module.exports = router;
