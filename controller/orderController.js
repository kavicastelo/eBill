const OrderSchema = require('../model/order');

const saveOrder=(req,resp)=>{
    const order= new OrderSchema({
        customer: req.body.customer,
        items: req.body.items,
        total: req.body.total,
        date: req.body.date
    });
    order.save().then(result=>{
        resp.json({data:{status:201,message:'Order Saved'}});
    }).catch(error=>{
        console.log(error);
        resp.json(error);
    })
};

const getAllOrderIds=(req,resp)=>{
    OrderSchema.find().then(result=>{
        let ids = new Array();
        for(const data of result){
            ids.push({id:data._id,date:data.date});
        }
        resp.json({data:{status:201,value:ids}});
    }).catch(error=>{
        console.log(error);
        resp.json(error);
    })
};

const getOrder=(req,resp)=>{
    OrderSchema.findOne({_id:req.headers.id}).then(result=>{
        resp.json({data:{status:201,value:result}});
    }).catch(error=>{
        console.log(error);
        resp.json(error);
    })
};

const getAllOrders=(req,resp)=>{
    OrderSchema.find().then(result=>{
        resp.json({data:{status:201,value:result}});
    }).catch(error=>{
        console.log(error);
        resp.json(error);
    })
};

module.exports = {
    saveOrder,
    getAllOrderIds,
    getOrder,
    getAllOrders
}