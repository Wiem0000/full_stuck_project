const { admin } = require('../models')


module.exports={
getAll:async(req,res)=>{
    try {
        const fetch=await admin.findAll()
        res.status(200).send(fetch)
    } catch (error) {
        console.log("error",error);
        
    }

},
Add:async(req,res)=>{
    const {name,email,password}=req.body
    try {
        const fetch=await admin.create({name,email,password})
        res.status(201).send(fetch)
    } catch (error) {
        console.log("error",error);
        
    }
},
Delete:async(req,res)=>{
    const {id}=req.params
    try {
        const fetch=await admin.destroy({where:{id}})
        res.status(200).send("deleted sucessfully")
    } catch (error) {
        console.log("error",error);
        
    }
},
Update:async(req,res)=>{
    const {id}=req.params
    const {name}=req.body
    try {
        const updated=await admin.update({name},{where:{id}})
        res.status(200).send("Updated sucessfully")
    } catch (error) {
        console.log("error",error);
        
    }
},





}


