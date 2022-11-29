const ProductSchema = require('../model/product');

const saveProduct=(req,resp)=>{
    const product= new ProductSchema({
        description: req.body.description,
        quantity: req.body.quantity,
        unitPrice: req.body.unitPrice
    });
    product.save().then(result=>{
        resp.json({data:{status:201,message:'Product Saved'}});
    }).catch(error=>{
        console.log(error);
        resp.json(error);
    })
};

const updateProduct=(req,resp)=>{
    ProductSchema.findOneAndUpdate({_id:req.headers.id},{$set:{
            description: req.body.description,
            quantity: req.body.quantity,
            unitPrice: req.body.unitPrice
        }}).then(result=>{
        resp.json({data:{status:201,message:'Product Updated!',info:result}});
    }).catch(error=>{
        console.log(error);
        resp.json(error);
    })
};

const deleteProduct=(req,resp)=>{
    ProductSchema.findOneAndDelete({_id:req.headers.id}).then(result=>{
        resp.json({data:{status:201,message:'Product Delete!',record:result}});
    }).catch(error=>{
        console.log(error);
        resp.json(error);
    })
};

const getProduct=(req,resp)=>{
    ProductSchema.findOne({_id:req.headers.id}).then(result=>{
        resp.json({data:{status:201,value:result}});
    }).catch(error=>{
        console.log(error);
        resp.json(error);
    })
};

const getAllProducts=(req,resp)=>{
    ProductSchema.find().then(result=>{
        resp.json({data:{status:201,value:result}});
    }).catch(error=>{
        console.log(error);
        resp.json(error);
    })
};

const getAllProductIds=(req,resp)=>{
    ProductSchema.find().then(result=>{
        let ids = new Array();
        for(const data of result){
            ids.push({id:data._id,description:data.description});
        }
        resp.json({data:{status:201,value:ids}});
    }).catch(error=>{
        console.log(error);
        resp.json(error);
    })
};

const updateQuantity=(req,resp)=>{
    ProductSchema.findOneAndUpdate({_id:req.headers.id},{$set:{
            quantity: req.body.quantity
        }}).then(result=>{
        resp.json({data:{status:201,message:'Quantity Updated!',info:result}});
    }).catch(error=>{
        console.log(error);
        resp.json(error);
    })
};

module.exports = {
    saveProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
    getProduct,
    getAllProductIds,
    updateQuantity
}