// **** Require's ****
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

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

const upload = multer({ storage: storage });

/* GET ALL PRODUCTS */
router.get("/", productsController.index);

/* CREATE ONE PRODUCT */
router.get("/productAdd", productsController.productAdd);
router.post("/", upload.single("imagen"), productsController.store);

/* GET ONE PRODUCT DETAIL */
router.get("/detail/:productoID", productsController.detail);

/* EDIT ONE PRODUCT */
router.get("/edit/:productoID", productsController.edit);
router.post("/edit/:productoID", productsController.update);
router.patch("/edit/:productoID", productsController.update);
router.get("/productsList", productsController.list);

/* DELETE ONE PRODUCT***/
router.post("/delete/:productoID", productsController.delete);
router.delete('/delete/:productoID', productsController.delete);

module.exports = router;
