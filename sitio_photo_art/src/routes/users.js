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
    .withMessage("Debe introducir un mail válido (ejemplo@email.com)"),
  body("contrasena")
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("Debe introducir una contraseña más larga"),

  body("imagen").custom((value, { req }) => {
    if (value != undefined) {
      if (!/\.(jpg|png)$/i.test(file.name)) {
        {
          msg: "Este email ya está registrado";
        }
      }
    }
  }),

  /*body("imagen").custom((value, { req }) => {
    if (value != undefined) {
      if (req.file.mimetype != ".jpg") {
        throw new Error(
          "Este no es un tipo archivo válido, solo se aceptan jpg, jpeg, png y gif"
        );
      }
    }
    return true;
  }),*/
];

const validacionesLogin = [
  body("emailLogin") // **** Agregar validacion que el mail no puede ser repetido con una que ya esta registrado ****
    .notEmpty()
    .isEmail()
    .withMessage("Debe introducir un mail válido (ejemplo@email.com)"),
  body("contrasenaLogin")
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("Debe introducir una contraseña más larga"),
];
const upload = multer({ storage: storage });
router.get("/login", userController.login);
router.post("/login", validacionesLogin, userController.procesLogin);
//Actualizar para lo nuestro
router.get("/", userController.index);
//router.get('/search', mainController.search)
/* CREATE ONE USER */
router.get("/register", userController.register);
router.get("/logout", userController.logout);
router.get("/userList", userController.list);
router.post(
  "/",
  upload.single("imagen"),
  validacionesRegistro,
  userController.store
);

module.exports = router;
