// **** Require's ****
const express = require('express');
const router = express.Router();
const multer = require('multer');
// **** Controller Require ****
const productsController = require('../controllers/productsController');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })


/* REVISAR TODO LO ABAJO */ 

/* GET ALL PRODUCTS */ 
router.get('/', productsController.index); 

/* CREATE ONE PRODUCT */ 
router.get('/create',upload.single("imagen"), productsController.create); 
router.post('/', productsController.store); 


/* GET ONE PRODUCT */ 
router.get('/detail/:id', productsController.detail); 

/* EDIT ONE PRODUCT */ 
router.get('/edit/:id', productsController.edit); 
router.patch('/edit/:id', productsController.update); 


/* DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;