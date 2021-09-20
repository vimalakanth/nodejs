const express=require('express');
const router=express.Router();
const userController =require('../controllers/user.controller');

router.get('/', userController.getAllUser);
router.get('/id', userController.getSingleUser);
router.post('/', userController.createUser);
router.put('/', userController.updateUser);

module.exports=router;