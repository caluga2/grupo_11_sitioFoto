// **** Require's ****
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");
// **** Controller Require ****
const productsController = require("../controllers/productsController");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/images/imgP");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const validacionesRegistro = [
  body("nombre")
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage("Debe introducir nombre de al menos 5 caracteres"),
  body("descripcion")
    .notEmpty()
    .isLength({ min: 20 })
    .withMessage("Debe introducir descripción de al menos 20 caracteres"),
  body("precio").notEmpty().withMessage("Debe introducir precio"),
  body("tamanoDeProducto")
    .notEmpty()
    .withMessage("Debe introducir tamaño del producto"),
  body("tipoDeProducto")
    .notEmpty()
    .withMessage("Debe introducir tipo del producto"),
  body("imagen").custom((value, { req }) => {
    if (value != undefined) {
      if (
        req.file.mimetype !== "application/jpg" &&
        req.file.mimetype !== "application/jpeg" &&
        req.file.mimetype !== "application/gif" &&
        req.file.mimetype !== "application/png"
      ) {
        throw new Error(
          "Este no es un tipo archivo válido, solo se aceptan jpg, jpeg, png y gif"
        );
      }
    }
    return true;
  }),
];

const upload = multer({ storage: storage });

/* GET ALL PRODUCTS */
router.get("/", productsController.index);

/* CREATE ONE PRODUCT */
router.get("/productAdd", productsController.productAdd);
router.post(
  "/",
  upload.single("imagen"),
  validacionesRegistro,
  productsController.store
);

/* GET ONE PRODUCT DETAIL */
router.get("/detail/:productoID", productsController.detail);

/* EDIT ONE PRODUCT */
router.get("/edit/:productoID", productsController.edit);
router.post(
  "/edit/:productoID",
  validacionesRegistro,
  productsController.update
);

router.get("/productsList", productsController.list);

/* DELETE ONE PRODUCT***/
router.post("/delete/:productoID", productsController.delete);

module.exports = router;
