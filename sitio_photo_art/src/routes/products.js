// **** Require's ****
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
// **** Controller Require ****
const productsController = require("../controllers/productsController");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.get("/Producto", (req, res) => {
  res.render("Producto");
});

router.get("/productAdd", (req, res) => {
  res.render("productAdd");
});

/* REVISAR TODO LO ABAJO */

/* GET ALL PRODUCTS */
router.get("/", productsController.index);

/* CREATE ONE PRODUCT */
router.get("/productAdd", productsController.productAdd);
router.post("/", upload.single("imagen"), productsController.store);

/* GET ONE PRODUCT */
router.get("/detail/:id", productsController.detail);

/* EDIT ONE PRODUCT */
router.get("/edit/:id", productsController.edit);
router.patch("/edit/:id", productsController.update);

/* DELETE ONE PRODUCT***/
router.delete("/delete/:id", productsController.destroy);

module.exports = router;
