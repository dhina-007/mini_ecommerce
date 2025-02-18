const ordermodel = require('../models/ordermodel');


//create order api - /api/v1/order
exports.createorder = async (req,res,next) => {
    const caritem =(req.body);
    const amount = Number(caritem.reduce((acc,item) => (acc + item.product.price * item.qty),0)).toFixed(2);
    const status = 'pending';

    const order = await ordermodel.create({caritem,amount,status})

    res.json({
        success:true,
        order
    })
}