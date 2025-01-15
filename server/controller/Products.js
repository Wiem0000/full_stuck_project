const { product } = require("../models/index")


module.exports={
getAll:async(req,resp)=>{
try {
    const fetch=await product.findAll()
    resp.status(200).send(fetch)
} catch (error) { throw error;
}

},
Add:async(req,resp)=>{
    const {name,imageUrl,price,quantity}=req.body
    try {
        const created=await product.create({name,imageUrl,price,quantity})
        resp.status(201).send("created")
    } catch (error) { throw error}
    
    },
 Delete:async(req,resp)=>{
        const {id}=req.params
    
        try {
            const notdelete=await product.findOne({where:{id:id}})
            if (!notdelete) {  
                resp.status(404).send("id not found")  
            }
            const deleted= await product.destroy({where:{id:id}})
            resp.status(201).send("deleted")
        } catch (error) { throw error}
        
        },
        Update:async(req,resp)=>{
            const {id}=req.params
            const {name,imageUrl,price,quantity}=req.body
            try {
                const verifyid=await product.findOne({where:{id:id}})
                if (!verifyid) {  
                    resp.status(404).send("id not found")  
                }
                const updated= await product.update({name,imageUrl,price,quantity},{where:{id:id}})
                resp.status(200).send( "Update successful");
            } catch (error) { throw error}
            
            },
}