const UserSchema = require('../model/user');
const bcrypt = require('bcrypt'); // npm i bcrypt
const jwt = require('jsonwebtoken'); //npm i jsonwebtoken

const signup=(req,resp)=>{

    UserSchema.findOne({email:req.body.email}).then(existsData=>{
        if(existsData===null){

            bcrypt.hash(req.body.password, 10, function(err, hash) {

                const user= new UserSchema({
                    email: req.body.email,
                    password: hash,
                    fullName: req.body.fullName
                });

                user.save().then(result=>{

                    const token = jwt.sign({ email: req.body.email, fullName: req.body.fullName},
                        process.env.PRIVATE_KEY);
                            resp.json({data:{status:201,message:'Registered',token}});

                }).catch(error=>{
                    console.log(error);
                    resp.json(error);
                })
            });

        }
        else{
            resp.status(403).json({data:{status:403,message:'Already exists'}});
        }
    }).catch(error=>{
        console.log(error);
        resp.json(error);
    })
};

const login=(req,resp)=>{
    UserSchema.findOne({email: req.body.email}).then(existData=>{
        if(existData!==null){

            bcrypt.compare(req.body.password, existData.password, function(err, result) {
                if(result){
                    const token = jwt.sign({ email: existData.email, fullName: existData.fullName},
                        process.env.PRIVATE_KEY);
                    resp.json({data:{status:200,message:'Logged in',token}});
                }
                else{
                    resp.status(401).join({record:'Password is incorrect'});
                }
            });

        }
        else{
            resp.status(404).join({record:'Email not found'});
        }
    })
}

module.exports = {
    signup,
    login
}