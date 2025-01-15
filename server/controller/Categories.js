const { categorie } = require("../models/index")


module.exports={
getAll:async(req,res)=>{
    try {
        const fetch=await categorie.findAll()
        res.status(200).send(fetch)
    } catch (error) {
        console.log("error",error);
        
    }

},
Add:async(req,res)=>{
    const {name}=req.body
    try {
        const added=await categorie.create({name})
        res.status(201).send(added)
    } catch (error) {
        console.log("error",error);
        
    }
},
Delete:async(req,res)=>{
    const {id}=req.params
    try {
        await categorie.destroy({where:{id}})
        res.status(200).send("deleted sucessfully")
    } catch (error) {
        console.log("error",error);
        
    }
},
Update:async(req,res)=>{
    const {id}=req.params
    const {name}=req.body
    try {
        const updated=await categorie.update({name},{where:{id}})
        res.status(200).send("Updated sucessfully")
    } catch (error) {
        console.log("error",error);
        
    }
},
}

