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
const validacionesLogin = [
  body("email")
    .isEmail()
    .withMessage("Debe introducir un mail válido (xxx@xx.com)"),
  body("contrasenaLogin")
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("Contraseña no válida, mínimo 6 caracteres"),
];
const upload = multer({ storage: storage });
router.get("/login", userController.login);
router.post("/login", validacionesLogin, userController.procesLogin);
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
