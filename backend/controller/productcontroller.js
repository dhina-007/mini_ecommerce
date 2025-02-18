const productmodel = require('../models/productmodel');


//get product API-/api//v1/products
exports.getproducts = async(req,res,next) => {
    let query = req.query.keyword?{ name : {   //filter to get a search item
        $regex: req.query.keyword, // for case insensitive  
        $options : 'i'
    }}:{}
    const products = await productmodel.find(query);

    res.json({
        success:true,
        products
    })
}

//get singleproduct API - /api/v1/product/:id

exports.getsingleproduct = async (req,res,next) => {
    try{
        const product = await productmodel.findById(req.params.id);

        res.json({
            success:true,
            product
        })

    } catch(error){
        res.status(404).json({
            success:false,
            message:"Unable to get Product with that ID"
        })
        
    }

}