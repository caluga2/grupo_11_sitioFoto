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
const validacionesRegistro = [
  body("nombre")
    .notEmpty()
    .isLength({ min: 2 })
    .withMessage("Debe introducir su nombre"),
  body("email") // **** Agregar validacion que el mail no puede ser repetido con una que ya esta registrado ****
    .notEmpty()
    .isEmail()
    .withMessage("Debe introducir un mail válido (xxx@xx.com)"),
  body("contrasena")
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("Debe introducir una contraseña más larga"),
  body("contrasena1").custom((value, { req }) => {
    if (value !== req.body.contrasena) {
      throw new Error("Las contraseñas no coinciden");
    }
    return true;
  }),
];
const upload = multer({ storage: storage });
router.get("/login", userController.login);
router.post("/login", userController.procesLogin);
//Actualizar para lo nuestro
router.get("/", userController.index);
//router.get('/search', mainController.search)
/* CREATE ONE USER */
router.get("/register", userController.register);

router.get("/userList", userController.list);
router.post(
  "/",
  upload.single("imagen"),
  validacionesRegistro,
  userController.store
);

module.exports = router;
