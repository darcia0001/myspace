const express = require('express');
const userController= require('../controllers/userController'); 
const router = express.Router(); 


router.get('/', userController.getAll);
router.post('/', userController.create);
router.get('/:id', userController.getById);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

 module.exports = router
 
