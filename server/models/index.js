const { Sequelize , DataTypes} = require('sequelize');

const sequelize = new Sequelize('the_w', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  });

sequelize.authenticate()
   .then(()=>console.log('dataaa basee connecteedd')) 
  .catch((error)=>console.log('erreeuuuuur', error) )


  const admin = require("../models/admin")( sequelize, DataTypes )
  const categorie = require("../models/categorie")( sequelize, DataTypes )
  const product = require("../models/product")( sequelize, DataTypes )

  
  categorie.hasMany(product,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  product.belongsTo(categorie)

// sequelize.sync({force:true})
//     .then(()=>{console.log('tableee createddd')}) 
//     .catch((error)=>console.log('err', error) )


module.exports={sequelize,admin,categorie,product}