const CustomerSchema = require('../model/customer');

const saveCustomer=(req,resp)=>{
    const customer= new CustomerSchema({
        name: req.body.name,
        address: req.body.address,
        salary: req.body.salary
    });
    customer.save().then(result=>{
        resp.json({data:{status:201,message:'Customer Saved'}});
    }).catch(error=>{
        console.log(error);
        resp.json(error);
    })
};

const updateCustomer=(req,resp)=>{
    CustomerSchema.findOneAndUpdate({_id:req.headers.id},{$set:{
            name: req.body.name,
            address: req.body.address,
            salary: req.body.salary
        }}).then(result=>{
        resp.json({data:{status:201,message:'Customer Updated!',info:result}});
    }).catch(error=>{
        console.log(error);
        resp.json(error);
    })
};

const deleteCustomer=(req,resp)=>{
    CustomerSchema.findOneAndDelete({_id:req.headers.id}).then(result=>{
        resp.json({data:{status:201,message:'Customer Delete!',record:result}});
    }).catch(error=>{
        console.log(error);
        resp.json(error);
    })
};

const getCustomer=(req,resp)=>{
    CustomerSchema.findOne({_id:req.headers.id}).then(result=>{
        resp.json({data:{status:201,value:result}});
    }).catch(error=>{
        console.log(error);
        resp.json(error);
    })
};

const getAllCustomers=(req,resp)=>{
    CustomerSchema.find().then(result=>{
        resp.json({data:{status:201,value:result}});
    }).catch(error=>{
        console.log(error);
        resp.json(error);
    })
};

const getAllCustomerIds=(req,resp)=>{
    CustomerSchema.find().then(result=>{
        let ids = new Array();
        for(const data of result){
            ids.push({id:data._id,name:data.name});
        }
        resp.json({data:{status:201,value:ids}});
    }).catch(error=>{
        console.log(error);
        resp.json(error);
    })
};

module.exports = {
    saveCustomer,
    updateCustomer,
    deleteCustomer,
    getCustomer,
    getAllCustomers,
    getAllCustomerIds
}