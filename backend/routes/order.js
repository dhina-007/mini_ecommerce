const express=require('express');
const { createorder } = require('../controller/ordercontroller');
const router=express.Router();


router.route('/orders').post(createorder);
// router.post('/orders', createorder);

module.exports = router;
