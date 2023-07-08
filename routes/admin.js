const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin')

router.get('/',adminController.getProducts);
router.post('/add-product',adminController.addProduct);
router.get('/delete/:id',adminController.deleteProduct);

module.exports = router;
